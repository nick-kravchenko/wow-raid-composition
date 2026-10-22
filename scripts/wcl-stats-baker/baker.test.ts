import { expect, test } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import type { WclStatsApi } from './api';
import { bakeRaids, extractEntries } from './baker';
import { RAIDS, RANK_TARGETS, TRACKED_GUILDS } from './config';
import { serializeBakedData, validateBakedData, writeBakedData } from './index';
import type { WclStatsData } from './types';

test('baker', async () => {
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
        // Both raids share zoneId 1060, so a single query must carry per-raid rankings aliases.
        expect(query).toMatch(/rankings_bt: rankings\(encounterID: \$encounterId_bt\)/);
        expect(query).toMatch(/rankings_hyjal: rankings\(encounterID: \$encounterId_hyjal\)/);
        return {
          reportData: {
            reports: {
              last_page: 1,
              data: guildId === 2
                ? [{ code: 'UA2', rankings_bt: [{ speed: { rank: '~1205' } }], rankings_hyjal: [{ speed: { rank: '~980' } }] }]
                : [],
            },
          },
        } as T;
      }
      throw new Error('Unexpected fixture query');
    }
  }

  expect(extractEntries({ data: [{ rank: 1 }] })).toEqual([{ rank: 1 }]);
  expect(extractEntries(null)).toEqual([]);

  async function run(): Promise<void> {
    const api = new FixtureApi();
    const raids = await bakeRaids(api, RAIDS);
    const btRaid = raids.find(raid => raid.id === 'bt')!;
    const hyjalRaid = raids.find(raid => raid.id === 'hyjal')!;

    expect(btRaid.rows.filter(row => RANK_TARGETS.includes(row.rank as typeof RANK_TARGETS[number])).map(row => row.rank)).toEqual([...RANK_TARGETS]);
    expect(btRaid.rows.filter(row => row.guildName === 'Ïzhachok').length, 'target/guild row must be deduplicated').toBe(1);
    expect(btRaid.rows.find(row => row.guildName === 'LiberalPug')?.rank).toBe(1205);
    expect(btRaid.rows.find(row => row.guildName === 'LiberalPug')?.reportUrl).toBe('https://fresh.warcraftlogs.com/reports/UA2');
    expect(hyjalRaid.rows.find(row => row.guildName === 'LiberalPug')?.rank).toBe(980);
    expect(btRaid.rows.find(row => row.guildName === 'MokNatal UA')?.rank).toBe(null);

    // Ïzhachok is discovered directly in the top-1000 ranking scan (both raids), so it never needs a lookup.
    const expectedLookups = TRACKED_GUILDS.length - 1;
    expect(api.guildLookupQueries, 'each unresolved guild should be looked up directly, not via a full directory scan').toBe(expectedLookups);
    expect(api.guildReportPageQueries, 'report pages must be fetched once per guild across both raids since they share a zoneId').toBe(expectedLookups);

    const data: WclStatsData = {
      generatedAt: '2026-07-21T00:00:00.000Z',
      raids,
    };
    validateBakedData(data);
    const source = serializeBakedData(data);
    expect(source).toMatch(/export const wclStatsData/);
    expect(source).toMatch(/faction\?: 'Alliance' \| 'Horde' \| null/);
    expect(source).not.toMatch(/client_secret|access_token/i);

    const temporaryDirectory = mkdtempSync(join(tmpdir(), 'wcl-stats-test-'));
    const destination = join(temporaryDirectory, 'wcl-stats.data.ts');
    writeFileSync(destination, 'existing-valid-data', 'utf8');
    expect(() => writeBakedData({ generatedAt: data.generatedAt, raids: [] }, destination)).toThrow();
    expect(readFileSync(destination, 'utf8'), 'invalid bake must preserve existing output').toBe('existing-valid-data');
    writeBakedData(data, destination);
    expect(readFileSync(destination, 'utf8')).toMatch(/Black Temple/);
    rmSync(temporaryDirectory, { recursive: true });
  }

  await run();
});
