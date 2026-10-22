import { expect, test } from 'vitest';

import { buildBakedCharacter, buildErrorCharacter, normalizeZoneRankings } from './normalize';
import { buildOverallRankRequests, normalizeOverallRank } from './overall-ranks';
import { CharacterRole } from '../../src/app/_entities/character-role.enum';
import type { WclRawCharacterData } from './types';

test('overall-ranks', () => {
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

  expect(baked.overallRanks, 'successful baked characters should default overallRanks to an empty array').toEqual([]);

  const errored = buildErrorCharacter({
    characterName: 'Tester',
    serverSlug: 'spineshatter',
    serverRegion: 'eu',
    error: 'failed',
    fetchedAt: '2026-06-02T00:00:00.000Z',
  });

  expect(errored.overallRanks, 'error baked characters should default overallRanks to an empty array').toEqual([]);

  const healerRequests = buildOverallRankRequests(CharacterRole.healer, {
    zoneID: 1060,
    partition: 3,
    btBossID: 50704,
    hyjalBossID: 50705,
  });

  expect(healerRequests.map((request) => [request.raid, request.metric, request.dpstype, request.wclMetric]), 'healers should request one HPS overall rank per raid').toEqual([
      ['bt', 'hps', 'dps', 'hps'],
      ['hyjal', 'hps', 'dps', 'hps'],
    ]);

  const dpsRequests = buildOverallRankRequests(CharacterRole.ranged, {
    zoneID: 1060,
    partition: 3,
    btBossID: 50704,
    hyjalBossID: 50705,
  });

  expect(dpsRequests.map((request) => [request.raid, request.metric, request.dpstype, request.wclMetric]), 'non-healers should request bosses and bosses+trash DPS ranks for both raids').toEqual([
      ['bt', 'dps-bosses', 'dps', null],
      ['bt', 'dps-bosses-trash', 'wdps', null],
      ['hyjal', 'dps-bosses', 'dps', null],
      ['hyjal', 'dps-bosses-trash', 'wdps', null],
    ]);

  expect(dpsRequests[0].sourceUrl, 'source URL should match the supplied Black Temple bosses ranking view').toBe('https://fresh.warcraftlogs.com/zone/rankings/1060?partition=3&boss=50704&dpstype=dps');

  const bakedWithOverallRanks = buildBakedCharacter({
    rawCharacter,
    gear: [],
    gearError: null,
    overallRanks: [{
      raid: 'bt',
      raidName: 'BT',
      bossID: 50704,
      metric: 'dps-bosses',
      label: 'BT bosses',
      rank: 12,
      rankPercent: 98.5,
      total: 1000,
      bestAmount: 1507,
      medianPerformance: 95,
      averagePerformance: 85,
      totalKills: 3,
      fastestKill: 4632749,
      sourceUrl: 'https://fresh.warcraftlogs.com/zone/rankings/1060?partition=3&boss=50704&dpstype=dps',
    }],
    fetchedAt: '2026-06-02T00:00:00.000Z',
  });

  expect(bakedWithOverallRanks.overallRanks[0]?.rank, 'successful baked characters should preserve fetched overall ranks').toBe(12);

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

  expect(normalizedAggregate.bestAmount, 'overall rank data should preserve aggregate best DPS from WCL encounterRankings.bestAmount').toBe(1507.003);
  expect(normalizedAggregate.medianPerformance, 'overall rank data should preserve aggregate median performance').toBe(95.435);
  expect(normalizedAggregate.totalKills, 'overall rank data should preserve aggregate total kills').toBe(3);
  expect(normalizedAggregate.rankPercent, 'overall rank data should fall back to the best parse percent when no aggregate rank percent exists').toBe(97.085);
  expect(normalizedAggregate.total, 'overall rank data should fall back to rankTotalParses from the best parse').toBe(5784);

  const normalizedEmptyAggregate = normalizeOverallRank(dpsRequests[0], {
    bestAmount: 0,
    medianPerformance: null,
    averagePerformance: null,
    totalKills: 0,
    ranks: [],
  });

  expect(normalizedEmptyAggregate.bestAmount, 'empty aggregate ranking data should not expose zero DPS as a real value').toBe(null);

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

  expect(normalizedZoneRankings.rankings[0]?.highestDps, 'boss rankings should expose highestDps from WCL zoneRankings.bestAmount').toBe(2170.89);
});
