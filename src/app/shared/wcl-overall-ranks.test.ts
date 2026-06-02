import assert from 'node:assert/strict';

import { filterOverallDamageRanks, formatOverallRank } from './wcl-overall-ranks';
import type { WclOverallRank } from '../_data/wcl-baked.data';

const rank = (raid: WclOverallRank['raid'], metric: WclOverallRank['metric']): WclOverallRank => ({
  raid,
  raidName: raid.toUpperCase(),
  bossID: raid === 'ssc' ? 100702 : 100703,
  metric,
  label: `${raid.toUpperCase()} ${metric}`,
  rank: null,
  rankPercent: 77.7,
  total: 1000,
  bestAmount: 1507.003,
  medianPerformance: 77.7,
  averagePerformance: 77.7,
  totalKills: 3,
  fastestKill: 123,
  sourceUrl: 'https://fresh.warcraftlogs.com/',
});

assert.equal(
  formatOverallRank({ rank: 12, total: 1000 }),
  '#12 / 1000',
  'overall rank should include rank and total when both are available',
);

assert.equal(
  formatOverallRank({ rank: 12, total: null }),
  '#12',
  'overall rank should include rank when total is missing',
);

assert.equal(
  formatOverallRank({ rank: null, total: 1000 }),
  '-',
  'overall rank should show placeholder when rank is missing',
);

assert.equal(
  formatOverallRank({ rank: null, total: 5784, bestAmount: 1507.003, metric: 'dps-bosses' }),
  '1,507.0 DPS',
  'overall rank display should show aggregate DPS when WCL API has no aggregate rank',
);

assert.deepEqual(
  filterOverallDamageRanks([
    rank('ssc', 'dps-bosses'),
    rank('ssc', 'dps-bosses-trash'),
    rank('tk', 'dps-bosses'),
    rank('tk', 'dps-bosses-trash'),
    rank('ssc', 'hps'),
  ]).map(r => r.label),
  ['SSC dps-bosses', 'SSC dps-bosses-trash', 'TK dps-bosses', 'TK dps-bosses-trash'],
  'character tiles should show only SSC/TK overall damage ranks',
);
