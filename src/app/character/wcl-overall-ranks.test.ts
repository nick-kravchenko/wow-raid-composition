import assert from 'node:assert/strict';

import { formatOverallRank } from './wcl-overall-ranks';

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
