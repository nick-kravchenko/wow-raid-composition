/**
 * WCL Baker — standalone data-baking service
 *
 * Reads characters from src/app/_data/players.data.ts, fetches their
 * rankings and gear from Warcraft Logs API v2, and writes a static
 * TypeScript file that the Angular app imports at build time.
 *
 * Required env vars:
 *   WCL_CLIENT_ID      — WCL API client ID
 *   WCL_CLIENT_SECRET  — WCL API client secret
 *   WCL_DEFAULT_REALM  — Realm slug (e.g. "gehennas") for all characters
 *   WCL_DEFAULT_REGION — Region slug (e.g. "eu" or "us") for all characters
 *
 * Optional env vars:
 *   WCL_ZONE_ID        — Filter rankings to a single zone ID (e.g. "1012")
 *   WCL_SKIP_GEAR      — Set to "true" to skip gear fetching (faster, fewer API calls)
 *   WCL_API_DELAY_MS   — Delay between API calls within a single character fetch in ms (default: 300)
 *   WCL_BATCH_SIZE     — Number of characters to fetch concurrently (default: 5)
 *   WCL_BATCH_DELAY_MS — Delay between batches in ms (default: 1000)
 */
import dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// players.data.ts uses only plain string enums — no Angular runtime required.
// tsx (esbuild) resolves its relative imports correctly.
import { players } from '../../src/app/_data/players.data';

import { getAccessToken } from './auth';
import { WclApiClient } from './api';
import {
  GET_CHARACTER_RANKINGS,
  GET_CHARACTER_RECENT_REPORT,
  GET_REPORT_MASTER_DATA,
  GET_REPORT_COMBATANT_INFO,
} from './queries';
import {
  buildBakedCharacter,
  buildErrorCharacter,
  normalizeGearItem,
} from './normalize';
import type {
  WclBakedCharacter,
  WclBakedData,
  WclGearItem,
  WclRawCharacterRankingsResponse,
  WclRawRecentReportsResponse,
  WclRawReportMasterDataResponse,
  WclRawCombatantInfoResponse,
} from './types';

// ── Resolve paths relative to this file ─────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = join(__dirname, '..', '..');
const OUTPUT_PATH = join(
  REPO_ROOT,
  'src',
  'app',
  '_data',
  'wcl-baked.data.ts',
);

// ── Config from environment ──────────────────────────────────────────────────

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (typeof value === 'undefined') {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

const CLIENT_ID = requireEnv('WCL_CLIENT_ID');
const CLIENT_SECRET = requireEnv('WCL_CLIENT_SECRET');
const DEFAULT_REALM = requireEnv('WCL_DEFAULT_REALM');
const DEFAULT_REGION = requireEnv('WCL_DEFAULT_REGION');
const ZONE_ID = process.env['WCL_ZONE_ID'] ? parseInt(process.env['WCL_ZONE_ID'], 10) : null;
const SKIP_GEAR = process.env['WCL_SKIP_GEAR'] === 'true';
const API_DELAY_MS = parseInt(process.env['WCL_API_DELAY_MS'] ?? '300', 10);
const BATCH_SIZE = parseInt(process.env['WCL_BATCH_SIZE'] ?? '10', 10);
const BATCH_DELAY_MS = parseInt(process.env['WCL_BATCH_DELAY_MS'] ?? '500', 10);

// ── Helpers ──────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(msg: string): void {
  console.log(`[wcl-baker] ${msg}`);
}

function warn(msg: string): void {
  console.warn(`[wcl-baker] WARN: ${msg}`);
}

function err(msg: string): void {
  console.error(`[wcl-baker] ERROR: ${msg}`);
}

/** Stable, lowercase key for a character name (used as Record key in output). */
function charKey(name: string): string {
  return name.toLowerCase();
}

// ── Gear fetching ────────────────────────────────────────────────────────────

/**
 * Attempts to fetch gear for a character via the CombatantInfo event in their
 * most recent logged report. Returns an empty array if no report exists or any
 * step fails, along with a diagnostic message.
 *
 * This is the only way WCL v2 exposes gear data — it is snapshot of equipment
 * at the start of a specific fight, not live armory data.
 */
async function fetchGear(
  client: WclApiClient,
  name: string,
  serverSlug: string,
  serverRegion: string,
): Promise<{ gear: WclGearItem[]; gearError: string | null }> {
  // Step 1: get the most recent report + kill fights
  await sleep(API_DELAY_MS);
  let reportCode: string;
  let fightId: number;

  try {
    const reportResp =
      await client.query<WclRawRecentReportsResponse>(
        GET_CHARACTER_RECENT_REPORT,
        { name, serverSlug, serverRegion },
      );

    const reports =
      reportResp.characterData?.character?.recentReports?.data ?? [];

    if (!reports.length) {
      return { gear: [], gearError: 'No recent reports found' };
    }

    const report = reports[0];
    const fights = report.fights ?? [];
    const firstKill = fights[0];

    if (!firstKill) {
      return { gear: [], gearError: 'No kill fights in most recent report' };
    }

    reportCode = report.code;
    fightId = firstKill.id;
  } catch (e) {
    return {
      gear: [],
      gearError: `Recent report query failed: ${(e as Error).message}`,
    };
  }

  // Step 2: find the actor ID for this character in the report
  await sleep(API_DELAY_MS);
  let actorId: number;

  try {
    const masterResp =
      await client.query<WclRawReportMasterDataResponse>(
        GET_REPORT_MASTER_DATA,
        { reportCode },
      );

    const actors =
      masterResp.reportData?.report?.masterData?.actors ?? [];

    // Players have type "Player" in WCL masterData
    const actor = actors.find(
      (a) =>
        a.type === 'Player' &&
        a.name.toLowerCase() === name.toLowerCase(),
    );

    if (!actor) {
      return {
        gear: [],
        gearError: `Actor "${name}" not found in report ${reportCode}`,
      };
    }

    actorId = actor.id;
  } catch (e) {
    return {
      gear: [],
      gearError: `Master data query failed: ${(e as Error).message}`,
    };
  }

  // Step 3: fetch the CombatantInfo event for this actor
  await sleep(API_DELAY_MS);

  try {
    const combatantResp =
      await client.query<WclRawCombatantInfoResponse>(
        GET_REPORT_COMBATANT_INFO,
        { reportCode, fightID: fightId, sourceID: actorId },
      );

    const events =
      combatantResp.reportData?.report?.events?.data ?? [];

    const combatantInfo = events.find(
      (e) => e.type === 'combatantinfo' && e.sourceID === actorId,
    );

    if (!combatantInfo) {
      return {
        gear: [],
        gearError: `CombatantInfo event not found for actor ${actorId} in fight ${fightId}`,
      };
    }

    const gear = (combatantInfo.gear ?? [])
      .map((item, index) => normalizeGearItem(item, index + 1));

    return { gear, gearError: null };
  } catch (e) {
    return {
      gear: [],
      gearError: `CombatantInfo query failed: ${(e as Error).message}`,
    };
  }
}

// ── Rankings fetching ────────────────────────────────────────────────────────

async function fetchCharacterData(
  client: WclApiClient,
  name: string,
  serverSlug: string,
  serverRegion: string,
  fetchedAt: string,
): Promise<WclBakedCharacter> {
  // Fetch rankings
  await sleep(API_DELAY_MS);
  let rawCharacter: WclRawCharacterRankingsResponse['characterData']['character'];

  try {
    const rankResp =
      await client.query<WclRawCharacterRankingsResponse>(
        GET_CHARACTER_RANKINGS,
        { name, serverSlug, serverRegion, zoneID: ZONE_ID },
      );

    rawCharacter = rankResp.characterData?.character ?? null;
  } catch (e) {
    return buildErrorCharacter({
      characterName: name,
      serverSlug,
      serverRegion,
      error: `Rankings query failed: ${(e as Error).message}`,
      fetchedAt,
    });
  }

  if (!rawCharacter) {
    return buildErrorCharacter({
      characterName: name,
      serverSlug,
      serverRegion,
      error: `Character not found on ${serverSlug}-${serverRegion}`,
      fetchedAt,
    });
  }

  // Fetch gear (best-effort, does not fail the character entry)
  let gear: WclGearItem[] = [];
  let gearError: string | null = null;

  if (!SKIP_GEAR) {
    const gearResult = await fetchGear(client, name, serverSlug, serverRegion);
    gear = gearResult.gear;
    gearError = gearResult.gearError;
    if (gearError) {
      warn(`Gear not fetched for "${name}": ${gearError}`);
    }
  }

  return buildBakedCharacter({ rawCharacter, gear, gearError, fetchedAt });
}

// ── Output file generation ───────────────────────────────────────────────────

function renderOutputFile(data: WclBakedData): string {
  return `// AUTO-GENERATED — do not edit manually.
// Run \`npm run bake:wcl\` to regenerate.
// Generated: ${data.generatedAt}

export interface WclGearItem {
  id: number;
  slot: number;
  quality: number;
  icon: string;
  itemLevel: number | null;
  permanentEnchantID: number | null;
  temporaryEnchantID: number | null;
}

export interface WclEncounterRanking {
  encounterID: number;
  encounterName: string;
  rankPercent: number | null;
  medianPerformance: number | null;
  totalKills: number;
  fastestKill: number;
  bestAmount: number;
  spec: string;
  allStars: {
    points: number;
    rank: number | null;
    rankPercent: number | null;
    total: number;
  } | null;
}

export interface WclBakedCharacter {
  characterName: string;
  serverSlug: string;
  serverRegion: string;
  wclId: number | null;
  gear: WclGearItem[];
  rankings: WclEncounterRanking[];
  bestPerformanceAverage: number | null;
  medianPerformanceAverage: number | null;
  totalKills: number;
  fetchedAt: string;
  error: string | null;
  partial: boolean;
}

export interface WclBakedData {
  generatedAt: string;
  defaultServerSlug: string;
  defaultServerRegion: string;
  /**
   * Keyed by lowercased character name.
   * Look up via \`character.name.toLowerCase()\` from players.data.ts.
   */
  characters: Record<string, WclBakedCharacter>;
}

export const wclBakedData: WclBakedData = ${JSON.stringify(data, null, 2)};
`;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  // Validate required env vars early
  if (!CLIENT_ID || !CLIENT_SECRET) {
    warn(
      'WCL_CLIENT_ID or WCL_CLIENT_SECRET not set — skipping bake (existing file preserved)',
    );
    process.exit(0);
  }

  if (!DEFAULT_REALM || !DEFAULT_REGION) {
    err('WCL_DEFAULT_REALM and WCL_DEFAULT_REGION must be set');
    process.exit(1);
  }

  log('Authenticating with Warcraft Logs...');
  const token = await getAccessToken(CLIENT_ID, CLIENT_SECRET);
  log('Authentication successful');

  const client = new WclApiClient(token);

  // Flatten all characters, keeping their player name for diagnostics
  const characters: Array<{ playerName: string; charName: string }> = [];
  for (const player of players) {
    for (const character of player.characters ?? []) {
      characters.push({
        playerName: player.name as string,
        charName: character.name as string,
      });
    }
  }

  log(`Found ${characters.length} characters across ${players.length} players`);
  log(
    `Config: realm=${DEFAULT_REALM} region=${DEFAULT_REGION} zoneID=${ZONE_ID ?? 'all'} skipGear=${SKIP_GEAR} batchSize=${BATCH_SIZE}`,
  );

  const generatedAt = new Date().toISOString();
  const results: Record<string, WclBakedCharacter> = {};
  const failed: string[] = [];

  for (let batchStart = 0; batchStart < characters.length; batchStart += BATCH_SIZE) {
    const batch = characters.slice(batchStart, batchStart + BATCH_SIZE);
    const batchEnd = Math.min(batchStart + BATCH_SIZE, characters.length);
    log(`Batch ${Math.floor(batchStart / BATCH_SIZE) + 1}: characters ${batchStart + 1}–${batchEnd} of ${characters.length}`);

    const batchResults = await Promise.all(
      batch.map(({ playerName, charName }, j) => {
        const idx = batchStart + j + 1;
        log(`  [${idx}/${characters.length}] Queuing "${charName}" (${playerName})`);
        return fetchCharacterData(client, charName, DEFAULT_REALM, DEFAULT_REGION, generatedAt)
          .then((baked) => ({ charName, playerName, baked }));
      }),
    );

    for (const { charName, playerName, baked } of batchResults) {
      if (baked.error) {
        err(`  ✗ ${charName}: ${baked.error}`);
        failed.push(`${charName} (${playerName}): ${baked.error}`);
      } else if (baked.partial) {
        log(`  ~ ${charName}: rankings OK, gear partial`);
      } else {
        log(`  ✓ ${charName}: ${baked.rankings.length} encounter(s), ${baked.gear.length} gear slot(s)`);
      }
      results[charKey(charName)] = baked;
    }

    if (batchEnd < characters.length) {
      log(`Batch done — waiting ${BATCH_DELAY_MS}ms before next batch...`);
      await sleep(BATCH_DELAY_MS);
    }
  }

  // Sort keys for a deterministic file
  const sortedCharacters: Record<string, WclBakedCharacter> = {};
  for (const key of Object.keys(results).sort()) {
    sortedCharacters[key] = results[key];
  }

  const output: WclBakedData = {
    generatedAt,
    defaultServerSlug: DEFAULT_REALM,
    defaultServerRegion: DEFAULT_REGION,
    characters: sortedCharacters,
  };

  writeFileSync(OUTPUT_PATH, renderOutputFile(output), 'utf-8');
  log(`Wrote ${OUTPUT_PATH}`);

  // Summary
  const successCount = Object.values(results).filter((c) => !c.error).length;
  const partialCount = Object.values(results).filter(
    (c) => !c.error && c.partial,
  ).length;
  const errorCount = failed.length;

  log(
    `Done: ${successCount} ok (${partialCount} partial gear), ${errorCount} failed`,
  );

  if (failed.length) {
    log('Failed characters:');
    for (const f of failed) {
      log(`  - ${f}`);
    }
  }

  // Exit non-zero only if every single character failed (total failure)
  if (errorCount > 0 && errorCount === characters.length) {
    err('All characters failed — this is likely an API or credentials issue');
    process.exit(1);
  }
}

main().catch((e) => {
  err(`Unhandled error: ${(e as Error).message}`);
  console.error(e);
  process.exit(1);
});
