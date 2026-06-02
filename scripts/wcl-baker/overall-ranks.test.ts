import assert from 'node:assert/strict';

import { buildBakedCharacter, buildErrorCharacter, normalizeZoneRankings } from './normalize';
import { buildOverallRankRequests, normalizeOverallRank } from './overall-ranks';
import { CharacterRole } from '../../src/app/_entities/character-role.enum';
import type { WclRawCharacterData } from './types';

const rawCharacter: WclRawCharacterData = {
  id: 1,
  name: 'Tester',
  classID: 8,
  server: {
    name: 'Spineshatter',
    slug: 'spineshatter',
    region: { name: 'Europe', slug: 'eu' },
  },
  zoneRankings: null,
};

const baked = buildBakedCharacter({
  rawCharacter,
  gear: [],
  gearError: null,
  overallRanks: [],
  fetchedAt: '2026-06-02T00:00:00.000Z',
});

assert.deepEqual(
  baked.overallRanks,
  [],
  'successful baked characters should default overallRanks to an empty array',
);

const errored = buildErrorCharacter({
  characterName: 'Tester',
  serverSlug: 'spineshatter',
  serverRegion: 'eu',
  error: 'failed',
  fetchedAt: '2026-06-02T00:00:00.000Z',
});

assert.deepEqual(
  errored.overallRanks,
  [],
  'error baked characters should default overallRanks to an empty array',
);

const healerRequests = buildOverallRankRequests(CharacterRole.healer, {
  zoneID: 1056,
  sscBossID: 100702,
  tkBossID: 100703,
});

assert.deepEqual(
  healerRequests.map((request) => [request.raid, request.metric, request.dpstype, request.wclMetric]),
  [
    ['ssc', 'hps', 'dps', 'hps'],
    ['tk', 'hps', 'dps', 'hps'],
  ],
  'healers should request one HPS overall rank per raid',
);

const dpsRequests = buildOverallRankRequests(CharacterRole.ranged, {
  zoneID: 1056,
  sscBossID: 100702,
  tkBossID: 100703,
});

assert.deepEqual(
  dpsRequests.map((request) => [request.raid, request.metric, request.dpstype, request.wclMetric]),
  [
    ['ssc', 'dps-bosses', 'dps', null],
    ['ssc', 'dps-bosses-trash', 'wdps', null],
    ['tk', 'dps-bosses', 'dps', null],
    ['tk', 'dps-bosses-trash', 'wdps', null],
  ],
  'non-healers should request bosses and bosses+trash DPS ranks for both raids',
);

assert.equal(
  dpsRequests[0].sourceUrl,
  'https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps',
  'source URL should match the supplied SSC bosses ranking view',
);

const bakedWithOverallRanks = buildBakedCharacter({
  rawCharacter,
  gear: [],
  gearError: null,
  overallRanks: [{
    raid: 'ssc',
    raidName: 'SSC',
    bossID: 100702,
    metric: 'dps-bosses',
    label: 'SSC bosses',
    rank: 12,
    rankPercent: 98.5,
    total: 1000,
    bestAmount: 1507,
    medianPerformance: 95,
    averagePerformance: 85,
    totalKills: 3,
    fastestKill: 4632749,
    sourceUrl: 'https://fresh.warcraftlogs.com/zone/rankings/1056?boss=100702&dpstype=dps',
  }],
  fetchedAt: '2026-06-02T00:00:00.000Z',
});

assert.equal(
  bakedWithOverallRanks.overallRanks[0]?.rank,
  12,
  'successful baked characters should preserve fetched overall ranks',
);

const normalizedAggregate = normalizeOverallRank(dpsRequests[0], {
  bestAmount: 1507.003,
  medianPerformance: 95.435,
  averagePerformance: 84.828,
  totalKills: 3,
  fastestKill: 4632749,
  ranks: [{
    rankPercent: 97.085,
    rankTotalParses: 5784,
    amount: 1507.003,
  }],
});

assert.equal(
  normalizedAggregate.bestAmount,
  1507.003,
  'overall rank data should preserve aggregate best DPS from WCL encounterRankings.bestAmount',
);
assert.equal(
  normalizedAggregate.medianPerformance,
  95.435,
  'overall rank data should preserve aggregate median performance',
);
assert.equal(
  normalizedAggregate.totalKills,
  3,
  'overall rank data should preserve aggregate total kills',
);
assert.equal(
  normalizedAggregate.rankPercent,
  97.085,
  'overall rank data should fall back to the best parse percent when no aggregate rank percent exists',
);
assert.equal(
  normalizedAggregate.total,
  5784,
  'overall rank data should fall back to rankTotalParses from the best parse',
);

const normalizedEmptyAggregate = normalizeOverallRank(dpsRequests[0], {
  bestAmount: 0,
  medianPerformance: null,
  averagePerformance: null,
  totalKills: 0,
  ranks: [],
});

assert.equal(
  normalizedEmptyAggregate.bestAmount,
  null,
  'empty aggregate ranking data should not expose zero DPS as a real value',
);

const normalizedZoneRankings = normalizeZoneRankings({
  bestPerformanceAverage: 95,
  medianPerformanceAverage: 90,
  totalKills: 1,
  rankings: [{
    encounter: { id: 100623, name: 'Hydross the Unstable' },
    rankPercent: 99,
    medianPercent: 98,
    totalKills: 3,
    fastestKill: 102130,
    bestAmount: 2170.89,
    spec: 'Fury',
    allStars: null,
  }],
});

assert.equal(
  normalizedZoneRankings.rankings[0]?.highestDps,
  2170.89,
  'boss rankings should expose highestDps from WCL zoneRankings.bestAmount',
);
