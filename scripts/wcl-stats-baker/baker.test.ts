import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import type { WclStatsApi } from './api';
import { bakeRaids, extractEntries } from './baker';
import { RAIDS, TRACKED_GUILDS } from './config';
import { serializeBakedData, validateBakedData, writeBakedData } from './index';
import type { WclStatsData } from './types';

class FixtureApi implements WclStatsApi {
  guildLookupQueries = 0;
  guildReportPageQueries = 0;

  async query<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
    if (query.includes('SpeedRankings')) {
      const page = Number(variables['page']);
      const entries = Array.from({ length: 50 }, (_, index) => {
        const rank = ((page - 1) * 50) + index + 1;
        return {
          rank,
          duration: 3_600_000 + rank * 1_000,
          guild: {
            name: rank === 12 ? 'Ïzhachok' : `Guild ${rank}`,
            server: { slug: 'spineshatter' },
          },
          report: { code: `REPORT${rank}` },
          fightId: rank,
        };
      });
      return { worldData: { encounter: { fightRankings: { rankings: entries } } } } as T;
    }
    if (query.includes('GuildByName')) {
      this.guildLookupQueries += 1;
      const name = String(variables['name']);
      const index = TRACKED_GUILDS.findIndex(guild => guild.name === name);
      return { guildData: { guild: index >= 0 ? { id: index + 1 } : null } } as T;
    }
    if (query.includes('GuildReportRankings')) {
      this.guildReportPageQueries += 1;
      const guildId = Number(variables['guildId']);
      // Both raids share zoneId 1056, so a single query must carry per-raid rankings aliases.
      assert.match(query, /rankings_tk: rankings\(encounterID: \$encounterId_tk\)/);
      assert.match(query, /rankings_ssc: rankings\(encounterID: \$encounterId_ssc\)/);
      return {
        reportData: {
          reports: {
            last_page: 1,
            data: guildId === 2
              ? [{ code: 'UA2', rankings_tk: [{ speed: { rank: '~1205' } }], rankings_ssc: [{ speed: { rank: '~980' } }] }]
              : [],
          },
        },
      } as T;
    }
    throw new Error('Unexpected fixture query');
  }
}

assert.deepEqual(extractEntries({ data: [{ rank: 1 }] }), [{ rank: 1 }]);
assert.deepEqual(extractEntries(null), []);

async function run(): Promise<void> {
  const api = new FixtureApi();
  const raids = await bakeRaids(api, RAIDS);
  const tkRaid = raids.find(raid => raid.id === 'tk')!;
  const sscRaid = raids.find(raid => raid.id === 'ssc')!;

  assert.deepEqual(tkRaid.rows.filter(row => [1, 50, 100].includes(row.rank ?? -1)).map(row => row.rank), [1, 50, 100]);
  assert.equal(tkRaid.rows.filter(row => row.guildName === 'Ïzhachok').length, 1, 'target/guild row must be deduplicated');
  assert.equal(tkRaid.rows.find(row => row.guildName === 'LiberalPug')?.rank, 1205);
  assert.equal(tkRaid.rows.find(row => row.guildName === 'LiberalPug')?.reportUrl, 'https://fresh.warcraftlogs.com/reports/UA2');
  assert.equal(sscRaid.rows.find(row => row.guildName === 'LiberalPug')?.rank, 980);
  assert.equal(tkRaid.rows.find(row => row.guildName === 'MokNatal UA')?.rank, null);

  // Ïzhachok is discovered directly in the top-1000 ranking scan (both raids), so it never needs a lookup.
  const expectedLookups = TRACKED_GUILDS.length - 1;
  assert.equal(api.guildLookupQueries, expectedLookups, 'each unresolved guild should be looked up directly, not via a full directory scan');
  assert.equal(
    api.guildReportPageQueries,
    expectedLookups,
    'report pages must be fetched once per guild across both raids since they share a zoneId',
  );

  const data: WclStatsData = {
    generatedAt: '2026-07-21T00:00:00.000Z',
    raids,
  };
  validateBakedData(data);
  const source = serializeBakedData(data);
  assert.match(source, /export const wclStatsData/);
  assert.match(source, /faction\?: 'Alliance' \| 'Horde' \| null/);
  assert.doesNotMatch(source, /client_secret|access_token/i);

  const temporaryDirectory = mkdtempSync(join(tmpdir(), 'wcl-stats-test-'));
  const destination = join(temporaryDirectory, 'wcl-stats.data.ts');
  writeFileSync(destination, 'existing-valid-data', 'utf8');
  assert.throws(() => writeBakedData({ generatedAt: data.generatedAt, raids: [] }, destination));
  assert.equal(readFileSync(destination, 'utf8'), 'existing-valid-data', 'invalid bake must preserve existing output');
  writeBakedData(data, destination);
  assert.match(readFileSync(destination, 'utf8'), /Serpentshrine Cavern/);
  rmSync(temporaryDirectory, { recursive: true });

  console.log('wcl-stats baker tests passed');
}

run().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
