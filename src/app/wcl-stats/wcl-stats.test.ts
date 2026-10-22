import { expect, test } from 'vitest';

import { wclStatsData } from '../_data/wcl-stats.data';
import { formatRaidDuration, formatRank, isRankingRowVisible } from './wcl-stats.helpers';

test('wcl-stats', () => {
  expect(formatRaidDuration(3_661_999)).toBe('01:01:01');
  expect(formatRaidDuration(59_999)).toBe('00:00:59');
  expect(formatRaidDuration(null)).toBe('-');
  expect(formatRank(100)).toBe('#100');
  expect(formatRank(null)).toBe('-');
  expect(isRankingRowVisible({ rank: 200, guildGroup: 'ua' }, true, false, false)).toBe(true);
  expect(isRankingRowVisible({ rank: 200, guildGroup: 'ua' }, false, false, false)).toBe(false);
  expect(isRankingRowVisible({ rank: 200, guildGroup: 'ru' }, true, false, true)).toBe(false);
  expect(isRankingRowVisible({ rank: 200, guildGroup: 'ru' }, true, true, true)).toBe(true);
  expect(isRankingRowVisible({ rank: 50, guildGroup: 'ru' }, false, false, false), 'milestone ranks remain visible').toBe(true);
  expect(wclStatsData.raids.map(raid => raid.id)).toEqual(['bt', 'hyjal']);
  for (const raid of wclStatsData.raids) {
    expect(raid.rows.filter(row => [1, 50, 100].includes(row.rank ?? -1)).map(row => row.rank)).toEqual([1, 50, 100]);
    expect(raid.rows.filter(row => row.guildGroup === 'ua').length).toBe(10);
    expect(raid.rows.filter(row => row.guildGroup === 'ru').length).toBe(12);
    expect(raid.rows.filter(row => row.guildGroup !== 'milestone').every(row => row.faction === 'Horde' || row.faction === 'Alliance')).toBeTruthy();
    expect(raid.rows.every(row => !/[🔴🔵]/u.test(row.displayName))).toBeTruthy();
    expect(raid.rows.every(row => !/[🇺🇦🧟]/u.test(row.displayName))).toBeTruthy();
    expect(raid.rows.every(row => row.guildUrl.startsWith('https://fresh.warcraftlogs.com/guild/'))).toBeTruthy();
    expect(raid.rows.every(row => !row.reportUrl || row.reportUrl.startsWith('https://fresh.warcraftlogs.com/reports/'))).toBeTruthy();
  }
});
