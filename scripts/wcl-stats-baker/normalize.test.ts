import assert from 'node:assert/strict';

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

assert.equal(parseRank('~1001'), 1001);
assert.equal(parseRank(0), null);
assert.equal(parseDurationMs(3_661_000), 3_661_000);
assert.equal(parseDurationMs(3661), 3_661_000);
assert.equal(normalizeKey(' Ïzha_chok '), 'izhachok');

const izhachok = UKRAINIAN_GUILDS[0];
assert.equal(guildUrl('eu', 'spineshatter', 'MokNatal UA'), 'https://fresh.warcraftlogs.com/guild/eu/spineshatter/moknatal%20ua');
assert.equal(reportUrl({ report: { code: 'ABC123' }, fight: 7 }), 'https://fresh.warcraftlogs.com/reports/ABC123#fight=7');
assert.equal(reportUrl({ guildName: 'Example' }), null);
assert.equal(isGuildEntry({ guild: { name: 'ÏZHACHOK', server: { name: 'Spine Shatter' } } }, izhachok), true);

const target = rankingEntryToRow({
  rank: 1,
  duration: 3_661_000,
  guild: { name: 'Fast Guild', server: { slug: 'spineshatter' } },
  report: { code: 'FAST' },
  fightId: 9,
});
assert.ok(target);
assert.equal(target.durationMs, 3_661_000);
assert.equal(target.reportUrl, 'https://fresh.warcraftlogs.com/reports/FAST#fight=9');

const targetIzhachok = rankingEntryToRow({
  rank: 50,
  duration: 4_000_000,
  guild: { name: 'Ïzhachok', server: { slug: 'spineshatter' } },
});
const configuredIzhachok = rankingEntryToRow({ rank: 50, duration: 4_000_000 }, undefined, izhachok);
assert.ok(targetIzhachok && configuredIzhachok);

const unresolved = unresolvedGuildRow(UKRAINIAN_GUILDS[1]);
const merged = mergeRankingRows([target, targetIzhachok], [unresolved, configuredIzhachok], UKRAINIAN_GUILDS);
assert.deepEqual(merged.map((row) => [row.rank, row.guildName, row.guildGroup]), [
  [1, 'Fast Guild', 'milestone'],
  [50, 'Ïzhachok', 'ua'],
  [null, 'LiberalPug', 'ua'],
]);

console.log('wcl-stats normalization tests passed');
