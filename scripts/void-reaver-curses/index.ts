/**
 * Void Reaver Warlock Curse Matrix
 *
 * For every active warlock in src/app/_data/players.data.ts, finds all their
 * Void Reaver kills on the configured realm/region, inspects each kill's casts
 * for the three offensive curses (Elements / Recklessness / Doom), groups kills
 * by weekly lockout, and prints a matrix to the console:
 *
 *   rows    = warlock characters
 *   columns = weekly lockouts (raid reset week)
 *   cells   = curses cast that lockout (CoE / CoR / CoD, comma-joined)
 *
 * Required env vars (shared with the WCL baker):
 *   WCL_CLIENT_ID, WCL_CLIENT_SECRET, WCL_DEFAULT_REALM, WCL_DEFAULT_REGION
 * Optional:
 *   WCL_API_DELAY_MS  - delay between API calls (default 300)
 *   WCL_RESET_HOUR    - reset hour used for lockout bucketing (default region-based)
 */
import dotenv from 'dotenv';

import { players } from '../../src/app/_data/players.data';
import { CharacterClass } from '../../src/app/_entities/character-class.enum';
import { CharacterRank } from '../../src/app/_entities/character-rank.enum';

import { getAccessToken } from '../wcl-baker/auth';
import { WclApiClient } from '../wcl-baker/api';
import {
  GET_CHARACTER_ENCOUNTER_KILLS,
  GET_REPORT_MASTER_DATA,
  GET_REPORT_CASTS_TABLE,
} from './queries';
import {
  classifyCurse,
  formatCurseCell,
  type CurseCode,
} from './curses';
import { defaultResetHour, lockoutBucket } from './lockout';

// ── Constants ────────────────────────────────────────────────────────────────

const VOID_REAVER_ENCOUNTER_ID = 100731;

// ── Config ───────────────────────────────────────────────────────────────────

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (typeof value === 'undefined' || value === '') {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

const API_DELAY_MS = parseInt(process.env['WCL_API_DELAY_MS'] ?? '300', 10);

// ── Helpers ──────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(msg: string): void {
  console.log(`[vr:curses] ${msg}`);
}

function warn(msg: string): void {
  console.warn(`[vr:curses] WARN: ${msg}`);
}

function err(msg: string): void {
  console.error(`[vr:curses] ERROR: ${msg}`);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function toNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

// ── Types ────────────────────────────────────────────────────────────────────

interface Kill {
  reportCode: string;
  fightID: number;
  startTime: number;
}

interface EncounterRankingsResponse {
  characterData?: {
    character?: { encounterRankings?: unknown } | null;
  };
}

interface MasterDataResponse {
  reportData?: {
    report?: {
      masterData?: {
        actors?: Array<{ id: number; name: string; type: string }>;
      } | null;
    } | null;
  };
}

interface CastsTableResponse {
  reportData?: {
    report?: { table?: unknown } | null;
  };
}

// ── Parsing ──────────────────────────────────────────────────────────────────

/** Defensively pull the list of kills out of the encounterRankings JSON scalar. */
function parseKills(encounterRankings: unknown): Kill[] {
  const root = asRecord(encounterRankings);
  if (!root) return [];

  const ranks = Array.isArray(root['ranks']) ? (root['ranks'] as unknown[]) : [];
  const kills: Kill[] = [];

  for (const entry of ranks) {
    const rank = asRecord(entry);
    if (!rank) continue;

    const report = asRecord(rank['report']);
    const reportCode =
      (report && typeof report['code'] === 'string' && report['code']) ||
      (typeof rank['reportID'] === 'string' && rank['reportID']) ||
      null;

    const fightID =
      (report && toNumber(report['fightID'])) ?? toNumber(rank['fightID']);

    const startTime =
      toNumber(rank['startTime']) ??
      (report && toNumber(report['startTime'])) ??
      null;

    if (!reportCode || fightID === null || startTime === null) {
      continue;
    }

    kills.push({ reportCode, fightID, startTime });
  }

  return kills;
}

/** Pull the curse codes cast from a Casts table JSON scalar. */
function parseCurses(table: unknown): Set<CurseCode> {
  const curses = new Set<CurseCode>();
  const root = asRecord(table);
  const data = root ? asRecord(root['data']) : null;
  const entries =
    (data && Array.isArray(data['entries']) && (data['entries'] as unknown[])) ||
    (root && Array.isArray(root['entries']) && (root['entries'] as unknown[])) ||
    [];

  for (const entry of entries) {
    const e = asRecord(entry);
    if (!e) continue;
    const guid = toNumber(e['guid'] ?? e['abilityGameID'] ?? e['id']);
    const name = typeof e['name'] === 'string' ? (e['name'] as string) : null;
    const code = classifyCurse(guid, name);
    if (code) curses.add(code);
  }

  return curses;
}

// ── Warlock selection ──────────────────────────────────────────────────────

interface Warlock {
  name: string;
  isMain: boolean;
  /** VR kill count, filled in during fetch; used for sorting. */
  killCount: number;
}

function collectWarlocks(): Warlock[] {
  const byKey = new Map<string, Warlock>();
  for (const player of players) {
    for (const character of player.characters ?? []) {
      if (character.class !== CharacterClass.warlock) continue;
      const key = (character.name as string).toLowerCase();
      if (!byKey.has(key)) {
        byKey.set(key, {
          name: character.name as string,
          isMain: character.rank === CharacterRank.main,
          killCount: 0,
        });
      }
    }
  }
  return [...byKey.values()];
}

/** Mains first, then alts; within a rank, most kills first; then name. */
function sortWarlocks(warlocks: Warlock[]): Warlock[] {
  return [...warlocks].sort((a, b) => {
    if (a.isMain !== b.isMain) return a.isMain ? -1 : 1;
    if (a.killCount !== b.killCount) return b.killCount - a.killCount;
    return a.name.localeCompare(b.name);
  });
}

// ── Per-report actor cache ───────────────────────────────────────────────────

/** reportCode → (lowercased actor name → actor id) */
type ActorCache = Map<string, Map<string, number>>;

async function resolveActorId(
  client: WclApiClient,
  cache: ActorCache,
  reportCode: string,
  warlockName: string,
): Promise<number | null> {
  let actors = cache.get(reportCode);

  if (!actors) {
    await sleep(API_DELAY_MS);
    const resp = await client.query<MasterDataResponse>(GET_REPORT_MASTER_DATA, {
      reportCode,
    });
    const list = resp.reportData?.report?.masterData?.actors ?? [];
    actors = new Map<string, number>();
    for (const a of list) {
      if (a.type === 'Player') actors.set(a.name.toLowerCase(), a.id);
    }
    cache.set(reportCode, actors);
  }

  return actors.get(warlockName.toLowerCase()) ?? null;
}

// ── Curse fetch per kill ─────────────────────────────────────────────────────

async function fetchKillCurses(
  client: WclApiClient,
  cache: ActorCache,
  warlockName: string,
  kill: Kill,
): Promise<Set<CurseCode>> {
  const actorId = await resolveActorId(
    client,
    cache,
    kill.reportCode,
    warlockName,
  );
  if (actorId === null) {
    warn(
      `Actor "${warlockName}" not found in report ${kill.reportCode} — skipping kill`,
    );
    return new Set();
  }

  await sleep(API_DELAY_MS);
  const resp = await client.query<CastsTableResponse>(GET_REPORT_CASTS_TABLE, {
    reportCode: kill.reportCode,
    fightID: kill.fightID,
    sourceID: actorId,
  });

  return parseCurses(resp.reportData?.report?.table);
}

// ── Table rendering ──────────────────────────────────────────────────────────

// Terminal display width: emoji / symbols render two columns wide, so .length
// (UTF-16 code units) misaligns columns. Count code points, double-width for
// emoji-range code points.
function displayWidth(text: string): number {
  let width = 0;
  for (const ch of text) {
    const cp = ch.codePointAt(0) ?? 0;
    const wide =
      cp >= 0x1f000 || // emoji / symbols supplementary
      (cp >= 0x2600 && cp <= 0x27bf) || // misc symbols + dingbats (⚫ is 0x26ab)
      (cp >= 0x2b00 && cp <= 0x2bff);
    width += wide ? 2 : 1;
  }
  return width;
}

function renderMatrix(
  warlocks: Warlock[],
  lockoutLabels: Map<number, string>,
  lockoutKeys: number[],
  cells: Map<string, Map<number, Set<CurseCode>>>,
): string {
  const nameHeader = 'Warlock';
  const nameWidth = Math.max(
    displayWidth(nameHeader),
    ...warlocks.map((w) => displayWidth(w.name)),
  );

  const colWidths = lockoutKeys.map((key) => {
    const label = lockoutLabels.get(key) ?? '';
    let max = displayWidth(label);
    for (const w of warlocks) {
      const set = cells.get(w.name)?.get(key);
      const text = set === undefined ? '-' : formatCurseCell(set);
      max = Math.max(max, displayWidth(text));
    }
    return Math.max(max, 3);
  });

  const pad = (text: string, width: number): string =>
    text + ' '.repeat(Math.max(0, width - displayWidth(text)));

  const lines: string[] = [];

  const headerCells = lockoutKeys.map((key, i) =>
    pad(lockoutLabels.get(key) ?? '', colWidths[i]),
  );
  lines.push([pad(nameHeader, nameWidth), ...headerCells].join('  '));
  lines.push(
    [
      '-'.repeat(nameWidth),
      ...colWidths.map((w) => '-'.repeat(w)),
    ].join('  '),
  );

  for (const w of warlocks) {
    const row = lockoutKeys.map((key, i) => {
      const set = cells.get(w.name)?.get(key);
      const text = set === undefined ? '-' : formatCurseCell(set);
      return pad(text, colWidths[i]);
    });
    lines.push([pad(w.name, nameWidth), ...row].join('  '));
  }

  return lines.join('\n');
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const clientId = requireEnv('WCL_CLIENT_ID');
  const clientSecret = requireEnv('WCL_CLIENT_SECRET');
  const realm = requireEnv('WCL_DEFAULT_REALM');
  const region = requireEnv('WCL_DEFAULT_REGION');

  const resetHour = process.env['WCL_RESET_HOUR']
    ? parseInt(process.env['WCL_RESET_HOUR'], 10)
    : defaultResetHour(region);

  const warlocks = collectWarlocks();
  log(`Found ${warlocks.length} active warlock(s): ${warlocks.map((w) => w.name).join(', ')}`);
  log(`Realm=${realm} region=${region} encounter=${VOID_REAVER_ENCOUNTER_ID} resetHour=${resetHour}`);

  log('Authenticating with Warcraft Logs...');
  const token = await getAccessToken(clientId, clientSecret);
  const client = new WclApiClient(token);
  log('Authentication successful');

  const actorCache: ActorCache = new Map();
  // warlock name → (lockout key → curse set)
  const cells = new Map<string, Map<number, Set<CurseCode>>>();
  const lockoutLabels = new Map<number, string>();

  for (const warlock of warlocks) {
    const perLockout = new Map<number, Set<CurseCode>>();
    cells.set(warlock.name, perLockout);

    let kills: Kill[] = [];
    try {
      await sleep(API_DELAY_MS);
      const resp = await client.query<EncounterRankingsResponse>(
        GET_CHARACTER_ENCOUNTER_KILLS,
        {
          name: warlock.name,
          serverSlug: realm,
          serverRegion: region,
          encounterID: VOID_REAVER_ENCOUNTER_ID,
        },
      );
      kills = parseKills(resp.characterData?.character?.encounterRankings);
    } catch (e) {
      warn(`Rankings query failed for "${warlock.name}": ${(e as Error).message}`);
      continue;
    }

    warlock.killCount = kills.length;

    if (!kills.length) {
      log(`  ${warlock.name}: no Void Reaver kills`);
      continue;
    }

    log(`  ${warlock.name}: ${kills.length} VR kill(s)`);

    for (const kill of kills) {
      const bucket = lockoutBucket(kill.startTime, region, resetHour);
      lockoutLabels.set(bucket.key, bucket.label);

      let curses: Set<CurseCode>;
      try {
        curses = await fetchKillCurses(client, actorCache, warlock.name, kill);
      } catch (e) {
        warn(
          `Casts query failed for "${warlock.name}" in ${kill.reportCode}#${kill.fightID}: ${(e as Error).message}`,
        );
        continue;
      }

      const existing = perLockout.get(bucket.key) ?? new Set<CurseCode>();
      for (const c of curses) existing.add(c);
      perLockout.set(bucket.key, existing);
    }
  }

  const lockoutKeys = [...lockoutLabels.keys()].sort((a, b) => a - b);

  if (!lockoutKeys.length) {
    log('No Void Reaver lockouts found for any warlock.');
    return;
  }

  console.log('');
  console.log(renderMatrix(sortWarlocks(warlocks), lockoutLabels, lockoutKeys, cells));
  console.log('');
  log('Legend: 🟣 CoE = Curse of the Elements, 🔴 CoR = Curse of Recklessness, 💀 CoD = Curse of Doom');
  log('Cell "-" = no VR kill that lockout; empty = killed VR but cast none of the three curses.');
}

main().catch((e) => {
  err(`Unhandled error: ${(e as Error).message}`);
  console.error(e);
  process.exit(1);
});
