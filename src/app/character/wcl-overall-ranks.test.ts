import { expect, test } from 'vitest';

import { formatOverallRank } from './wcl-overall-ranks';

test('wcl-overall-ranks', () => {
  expect(formatOverallRank({ rank: 12, total: 1000 }), 'overall rank should include rank and total when both are available').toBe('#12 / 1000');

  expect(formatOverallRank({ rank: 12, total: null }), 'overall rank should include rank when total is missing').toBe('#12');

  expect(formatOverallRank({ rank: null, total: 1000 }), 'overall rank should show placeholder when rank is missing').toBe('-');

  expect(formatOverallRank({ rank: null, total: 5784, bestAmount: 1507.003, metric: 'dps-bosses' }), 'overall rank display should show aggregate DPS when WCL API has no aggregate rank').toBe('1,507.0 DPS');
});
