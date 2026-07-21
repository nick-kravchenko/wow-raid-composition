import assert from 'node:assert/strict';

import { wclStatsData } from '../_data/wcl-stats.data';
import { formatRaidDuration, formatRank, isRankingRowVisible } from './wcl-stats.helpers';

assert.equal(formatRaidDuration(3_661_999), '01:01:01');
assert.equal(formatRaidDuration(59_999), '00:00:59');
assert.equal(formatRaidDuration(null), '-');
assert.equal(formatRank(100), '#100');
assert.equal(formatRank(null), '-');
assert.equal(isRankingRowVisible({ rank: 200, guildGroup: 'ua' }, true, false, false), true);
assert.equal(isRankingRowVisible({ rank: 200, guildGroup: 'ua' }, false, false, false), false);
assert.equal(isRankingRowVisible({ rank: 200, guildGroup: 'ru' }, true, false, true), false);
assert.equal(isRankingRowVisible({ rank: 200, guildGroup: 'ru' }, true, true, true), true);
assert.equal(isRankingRowVisible({ rank: 50, guildGroup: 'ru' }, false, false, false), true, 'milestone ranks remain visible');
assert.deepEqual(wclStatsData.raids.map(raid => raid.id), ['tk', 'ssc']);
for (const raid of wclStatsData.raids) {
  assert.deepEqual(raid.rows.filter(row => [1, 50, 100].includes(row.rank ?? -1)).map(row => row.rank), [1, 50, 100]);
  assert.equal(raid.rows.filter(row => row.guildGroup === 'ua').length, 10);
  assert.equal(raid.rows.filter(row => row.guildGroup === 'ru').length, 17);
  assert.ok(raid.rows.filter(row => row.guildGroup !== 'milestone').every(row => row.faction === 'Horde' || row.faction === 'Alliance'));
  assert.ok(raid.rows.every(row => !/[🔴🔵]/u.test(row.displayName)));
  assert.ok(raid.rows.every(row => !/[🇺🇦🧟]/u.test(row.displayName)));
  assert.ok(raid.rows.every(row => row.guildUrl.startsWith('https://fresh.warcraftlogs.com/guild/')));
  assert.ok(raid.rows.every(row => !row.reportUrl || row.reportUrl.startsWith('https://fresh.warcraftlogs.com/reports/')));
}

console.log('wcl-stats presentation tests passed');
