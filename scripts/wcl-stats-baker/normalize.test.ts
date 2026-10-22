import { expect, test } from 'vitest';

import { UKRAINIAN_GUILDS } from './config';
import {
  guildUrl,
  isGuildEntry,
  mergeRankingRows,
  normalizeKey,
  parseDurationMs,
  parseRank,
  rankingEntryToRow,
  reportUrl,
  unresolvedGuildRow,
} from './normalize';

test('normalize', () => {
  expect(parseRank('~1001')).toBe(1001);
  expect(parseRank(0)).toBe(null);
  expect(parseDurationMs(3_661_000)).toBe(3_661_000);
  expect(parseDurationMs(3661)).toBe(3_661_000);
  expect(normalizeKey(' Ïzha_chok ')).toBe('izhachok');

  const izhachok = UKRAINIAN_GUILDS[0];
  expect(guildUrl('eu', 'spineshatter', 'MokNatal UA')).toBe('https://fresh.warcraftlogs.com/guild/eu/spineshatter/moknatal%20ua');
  expect(reportUrl({ report: { code: 'ABC123' }, fight: 7 })).toBe('https://fresh.warcraftlogs.com/reports/ABC123#fight=7');
  expect(reportUrl({ guildName: 'Example' })).toBe(null);
  expect(isGuildEntry({ guild: { name: 'ÏZHACHOK', server: { name: 'Spine Shatter' } } }, izhachok)).toBe(true);

  const target = rankingEntryToRow({
    rank: 1,
    duration: 3_661_000,
    guild: { name: 'Fast Guild', server: { slug: 'spineshatter' } },
    report: { code: 'FAST' },
    fightId: 9,
  });
  expect(target).toBeTruthy();
  expect(target.durationMs).toBe(3_661_000);
  expect(target.reportUrl).toBe('https://fresh.warcraftlogs.com/reports/FAST#fight=9');

  const targetIzhachok = rankingEntryToRow({
    rank: 50,
    duration: 4_000_000,
    guild: { name: 'Ïzhachok', server: { slug: 'spineshatter' } },
  });
  const configuredIzhachok = rankingEntryToRow({ rank: 50, duration: 4_000_000 }, undefined, izhachok);
  expect(targetIzhachok && configuredIzhachok).toBeTruthy();

  const unresolved = unresolvedGuildRow(UKRAINIAN_GUILDS[1]);
  const merged = mergeRankingRows([target, targetIzhachok], [unresolved, configuredIzhachok], UKRAINIAN_GUILDS);
  expect(merged.map((row) => [row.rank, row.guildName, row.guildGroup])).toEqual([
    [1, 'Fast Guild', 'milestone'],
    [50, 'Ïzhachok', 'ua'],
    [null, 'LiberalPug', 'ua'],
  ]);
});
