/**
 * Battle.net Baker — fetches character profile data from Blizzard's API.
 *
 * Reads characters from src/app/_data/players.data.ts, fetches race, class,
 * gender, level, and spec from the Battle.net Profile API, and writes a static
 * TypeScript file that the Angular app imports at build time.
 *
 * Required env vars:
 *   BNET_CLIENT_ID     — Blizzard API client ID
 *   BNET_CLIENT_SECRET — Blizzard API client secret
 *   BNET_REALM_SLUG    — Realm slug (e.g. "gehennas")
 *   BNET_REGION        — Region slug (e.g. "eu" or "us")
 *
 * Optional env vars:
 *   BNET_GAME_VERSION  — "retail" | "classic" | "classic1x" (default: "classic")
 *   BNET_BATCH_SIZE    — Characters per concurrent batch (default: 10)
 *   BNET_BATCH_DELAY_MS — Delay between batches in ms (default: 500)
 *   BNET_DEBUG         — Set to "true" to log raw API responses
 */
import dotenv from 'dotenv';
import { writeFileSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { players } from '../../src/app/_data/players.data';
import { getAccessToken } from './auth';
import { BnetApiClient } from './api';
import { normalizeCharacter, buildErrorCharacter } from './normalize';
import type {
  BnetRawCharacter,
  BnetRawCharacterMedia,
  BnetBakedCharacter,
  BnetBakedData,
} from './types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = join(__dirname, '..', '..');
const OUTPUT_PATH = join(REPO_ROOT, 'src', 'app', '_data', 'battlenet-baked.data.ts');

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (typeof value === 'undefined') throw new Error(`Missing required env var: ${name}`);
  return value;
}

const CLIENT_ID = requireEnv('BNET_CLIENT_ID');
const CLIENT_SECRET = requireEnv('BNET_CLIENT_SECRET');
const REALM_SLUG = requireEnv('BNET_REALM_SLUG');
const REGION = requireEnv('BNET_REGION');
const GAME_VERSION = process.env['BNET_GAME_VERSION'] ?? 'classic';
const BATCH_SIZE = parseInt(process.env['BNET_BATCH_SIZE'] ?? '10', 10);
const BATCH_DELAY_MS = parseInt(process.env['BNET_BATCH_DELAY_MS'] ?? '100', 10);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(msg: string): void { console.log(`[bnet-baker] ${msg}`); }
function warn(msg: string): void { console.warn(`[bnet-baker] WARN: ${msg}`); }
function err(msg: string): void { console.error(`[bnet-baker] ERROR: ${msg}`); }

function charKey(name: string): string { return name.toLowerCase(); }

function loadExistingData(outputPath: string): Record<string, BnetBakedCharacter> {
  try {
    const content = readFileSync(outputPath, 'utf-8');
    const idx = content.lastIndexOf('= ');
    if (idx === -1) return {};
    const json = content.slice(idx + 2).replace(/;\s*$/, '').trim();
    const parsed = JSON.parse(json) as BnetBakedData;
    const chars = parsed.characters ?? {};
    // Migrate old entries that predate new fields
    for (const key of Object.keys(chars)) {
      const c = chars[key] as unknown as {
        avatarUrl?: string | null;
        mainRawUrl?: string | null;
      };
      if (typeof c.avatarUrl === 'undefined') c.avatarUrl = null;
      if (typeof c.mainRawUrl === 'undefined') c.mainRawUrl = null;
    }
    return chars;
  } catch {
    return {};
  }
}

async function fetchCharacterData(
  client: BnetApiClient,
  name: string,
  realmSlug: string,
  region: string,
  fetchedAt: string,
): Promise<BnetBakedCharacter> {
  try {
    const raw = await client.getCharacter(realmSlug, name);

    if (process.env['BNET_DEBUG']) {
      console.debug('[bnet-baker] raw response:', JSON.stringify(raw, null, 2));
    }

    if (!raw) {
      return buildErrorCharacter({
        characterName: name,
        realmSlug,
        region,
        error: `Character not found on ${realmSlug}-${region}`,
        fetchedAt,
      });
    }

    let media: BnetRawCharacterMedia | null = null;
    try {
      media = (await client.getCharacterMedia(realmSlug, name)) as BnetRawCharacterMedia | null;
    } catch {
      // media is best-effort — silently skip
    }

    return normalizeCharacter(raw as BnetRawCharacter, media, realmSlug, region, fetchedAt);
  } catch (e) {
    return buildErrorCharacter({
      characterName: name,
      realmSlug,
      region,
      error: (e as Error).message,
      fetchedAt,
    });
  }
}

function renderOutputFile(data: BnetBakedData): string {
  return `// AUTO-GENERATED — do not edit manually.
// Run \`npm run bake:bnet\` to regenerate.
// Generated: ${data.generatedAt}

export type BnetFaction = 'ALLIANCE' | 'HORDE';
export type BnetGender = 'MALE' | 'FEMALE';

export interface BnetBakedCharacter {
  characterName: string;
  realmSlug: string;
  region: string;
  bnetId: number | null;
  raceId: number | null;
  raceName: string | null;
  classId: number | null;
  className: string | null;
  gender: BnetGender | null;
  level: number | null;
  activeSpecId: number | null;
  activeSpecName: string | null;
  faction: BnetFaction | null;
  averageItemLevel: number | null;
  equippedItemLevel: number | null;
  avatarUrl: string | null;
  mainRawUrl: string | null;
  fetchedAt: string;
  error: string | null;
}

export interface BnetBakedData {
  generatedAt: string;
  defaultRealmSlug: string;
  defaultRegion: string;
  gameVersion: string;
  /**
   * Keyed by lowercased character name.
   * Look up via \`character.name.toLowerCase()\` from players.data.ts.
   */
  characters: Record<string, BnetBakedCharacter>;
}

export const bnetBakedData: BnetBakedData = ${JSON.stringify(data, null, 2)};
`;
}

async function main(): Promise<void> {
  if (!CLIENT_ID || !CLIENT_SECRET) {
    warn('BNET_CLIENT_ID or BNET_CLIENT_SECRET not set — skipping bake (existing file preserved)');
    process.exit(0);
  }

  log(`Authenticating with Battle.net (${REGION}, ${GAME_VERSION})...`);
  const token = await getAccessToken(CLIENT_ID, CLIENT_SECRET, REGION);
  log('Authentication successful');

  const client = new BnetApiClient(token, REGION, GAME_VERSION);

  const characters: Array<{ playerName: string; charName: string }> = [];
  for (const player of players) {
    for (const character of player.characters ?? []) {
      characters.push({ playerName: player.name as string, charName: character.name as string });
    }
  }

  log(`Found ${characters.length} characters across ${players.length} players`);
  log(`Config: realm=${REALM_SLUG} region=${REGION} gameVersion=${GAME_VERSION} batchSize=${BATCH_SIZE}`);

  const existingChars = loadExistingData(OUTPUT_PATH);
  log(`Loaded ${Object.keys(existingChars).length} existing character(s) for merge`);

  const generatedAt = new Date().toISOString();
  const results: Record<string, BnetBakedCharacter> = {};
  const failed: string[] = [];

  for (let batchStart = 0; batchStart < characters.length; batchStart += BATCH_SIZE) {
    const batch = characters.slice(batchStart, batchStart + BATCH_SIZE);
    const batchEnd = Math.min(batchStart + BATCH_SIZE, characters.length);
    log(`Batch ${Math.floor(batchStart / BATCH_SIZE) + 1}: characters ${batchStart + 1}–${batchEnd} of ${characters.length}`);

    const batchResults = await Promise.all(
      batch.map(({ playerName, charName }, j) => {
        const idx = batchStart + j + 1;
        log(`  [${idx}/${characters.length}] Queuing "${charName}" (${playerName})`);
        return fetchCharacterData(client, charName, REALM_SLUG, REGION, generatedAt)
          .then((baked) => ({ charName, playerName, baked }));
      }),
    );

    for (const { charName, playerName, baked } of batchResults) {
      const key = charKey(charName);
      if (baked.error) {
        const existing = existingChars[key];
        if (existing) {
          warn(`  ~ ${charName}: fetch failed (${baked.error}), keeping existing data`);
          results[key] = existing;
        } else {
          err(`  ✗ ${charName}: ${baked.error}`);
          failed.push(`${charName} (${playerName}): ${baked.error}`);
          results[key] = baked;
        }
      } else {
        log(`  ✓ ${charName}: ${baked.raceName} ${baked.className} ${baked.gender} lvl ${baked.level}`);
        results[key] = baked;
      }
    }

    if (batchEnd < characters.length) {
      log(`Batch done — waiting ${BATCH_DELAY_MS}ms before next batch...`);
      await sleep(BATCH_DELAY_MS);
    }
  }

  const sortedCharacters: Record<string, BnetBakedCharacter> = {};
  for (const key of Object.keys(results).sort()) {
    sortedCharacters[key] = results[key];
  }

  const output: BnetBakedData = {
    generatedAt,
    defaultRealmSlug: REALM_SLUG,
    defaultRegion: REGION,
    gameVersion: GAME_VERSION,
    characters: sortedCharacters,
  };

  writeFileSync(OUTPUT_PATH, renderOutputFile(output), 'utf-8');
  log(`Wrote ${OUTPUT_PATH}`);

  const successCount = Object.values(results).filter((c) => !c.error).length;
  log(`Done: ${successCount} ok, ${failed.length} failed`);

  if (failed.length) {
    log('Failed characters:');
    for (const f of failed) log(`  - ${f}`);
  }

  if (failed.length > 0 && failed.length === characters.length) {
    err('All characters failed — likely an API or credentials issue');
    process.exit(1);
  }
}

main().catch((e) => {
  err(`Unhandled error: ${(e as Error).message}`);
  console.error(e);
  process.exit(1);
});
