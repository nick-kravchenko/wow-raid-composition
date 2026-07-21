import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import type { WclStatsApi } from './api';
import { bakeRaid, extractEntries } from './baker';
import { RAIDS, TRACKED_GUILDS } from './config';
import { serializeBakedData, validateBakedData, writeBakedData } from './index';
import type { WclStatsData } from './types';

class FixtureApi implements WclStatsApi {
  guildDirectoryQueries = 0;

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
    if (query.includes('GuildDirectory')) {
      this.guildDirectoryQueries += 1;
      return {
        guildData: {
          guilds: {
            last_page: 1,
            data: TRACKED_GUILDS.map((guild, index) => ({ id: index + 1, name: guild.name })),
          },
        },
      } as T;
    }
    if (query.includes('GuildReportRankings')) {
      const guildId = Number(variables['guildId']);
      return {
        reportData: {
          reports: {
            last_page: 1,
            data: guildId === 2
              ? [{ code: 'UA2', rankings: [{ speed: { rank: '~1205' } }] }]
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
  const raid = await bakeRaid(api, RAIDS[0]);
  assert.deepEqual(raid.rows.filter(row => [1, 50, 100].includes(row.rank ?? -1)).map(row => row.rank), [1, 50, 100]);
  assert.equal(raid.rows.filter(row => row.guildName === 'Ïzhachok').length, 1, 'target/guild row must be deduplicated');
  assert.equal(raid.rows.find(row => row.guildName === 'LiberalPug')?.rank, 1205);
  assert.equal(raid.rows.find(row => row.guildName === 'LiberalPug')?.reportUrl, 'https://fresh.warcraftlogs.com/reports/UA2');
  assert.equal(raid.rows.find(row => row.guildName === 'MokNatal UA')?.rank, null);
  await bakeRaid(api, RAIDS[1]);
  assert.equal(api.guildDirectoryQueries, 1, 'guild directory should be shared across raids');

  const data: WclStatsData = {
    generatedAt: '2026-07-21T00:00:00.000Z',
    raids: RAIDS.map(config => ({ ...raid, id: config.id, name: config.name, encounterId: config.encounterId })),
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
