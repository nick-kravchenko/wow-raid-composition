import assert from 'node:assert/strict';

import { CharacterClass } from '../../_entities/character-class.enum';
import { CharacterRank } from '../../_entities/character-rank.enum';
import { CharacterRole } from '../../_entities/character-role.enum';
import { CharacterSpecEnum } from '../../_entities/character-spec.enum';
import type { Character } from '../../_entities/character';
import type { WclBakedCharacter, WclOverallRank } from '../../_data/wcl-baked.data';
import { buildRaidDamageSummary } from './raid-damage-summary';

const character = (name: string, role: CharacterRole): Character => ({
  name,
  class: name === 'Unrankedone' ? CharacterClass.rogue : CharacterClass.mage,
  spec: role === CharacterRole.healer ? CharacterSpecEnum.Arcane : CharacterSpecEnum.Fire,
  role,
  rank: CharacterRank.main,
});

const rank = (
  raid: WclOverallRank['raid'],
  metric: WclOverallRank['metric'],
  bestAmount: number | null,
): WclOverallRank => ({
  raid,
  raidName: raid.toUpperCase(),
  bossID: raid === 'bt' ? 50704 : 50705,
  metric,
  label: `${raid.toUpperCase()} ${metric}`,
  rank: 12,
  rankPercent: bestAmount === null ? null : 77.7,
  total: 1000,
  bestAmount,
  medianPerformance: bestAmount === null ? null : 77.7,
  averagePerformance: bestAmount === null ? null : 77.7,
  totalKills: 3,
  fastestKill: 123,
  sourceUrl: 'https://fresh.warcraftlogs.com/',
});

const wclCharacter = (
  name: string,
  amounts: [number | null, number | null, number | null, number | null],
  hpsAmounts: [number | null, number | null] = [null, null],
): WclBakedCharacter => ({
  characterName: name,
  serverSlug: 'spineshatter',
  serverRegion: 'EU',
  wclId: 1,
  gear: [],
  rankings: [],
  overallRanks: [
    rank('bt', 'dps-bosses', amounts[0]),
    rank('bt', 'dps-bosses-trash', amounts[1]),
    rank('hyjal', 'dps-bosses', amounts[2]),
    rank('hyjal', 'dps-bosses-trash', amounts[3]),
    rank('bt', 'hps', hpsAmounts[0]),
    rank('hyjal', 'hps', hpsAmounts[1]),
  ],
  bestPerformanceAverage: 77.7,
  medianPerformanceAverage: 77.7,
  totalKills: 3,
  fetchedAt: '2026-06-02T00:00:00.000Z',
  error: null,
  partial: false,
});

const summary = buildRaidDamageSummary(
  [
    character('Rankedone', CharacterRole.ranged),
    character('Unrankedone', CharacterRole.melee),
    character('Healerone', CharacterRole.healer),
  ],
  {
    rankedone: wclCharacter('Rankedone', [1000, 500, 800, 400]),
    unrankedone: wclCharacter('Unrankedone', [600, 300, null, null]),
    healerone: wclCharacter('Healerone', [9999, 9999, 9999, 9999], [1200, null]),
  },
);

assert.equal(
  summary.raidDps,
  900,
  'raid DPS should sum non-healer character averages across BT and Hyjal damage',
);

assert.deepEqual(
  {
    btDamage: summary.btDamage,
    hyjalDamage: summary.hyjalDamage,
    raidHps: summary.raidHps,
    btHealing: summary.btHealing,
    hyjalHealing: summary.hyjalHealing,
    btBossesDamage: summary.btBossesDamage,
    btBossesTrashDamage: summary.btBossesTrashDamage,
    hyjalBossesDamage: summary.hyjalBossesDamage,
    hyjalBossesTrashDamage: summary.hyjalBossesTrashDamage,
    unrankedCount: summary.unrankedCount,
    characterCount: summary.characterCount,
    hasUnranked: summary.hasUnranked,
    unrankedCharacters: summary.unrankedCharacters.map(character => [character.name, character.class]),
  },
  {
    btDamage: 2400,
    hyjalDamage: 1200,
    raidHps: 600,
    btHealing: 1200,
    hyjalHealing: 0,
    btBossesDamage: 1600,
    btBossesTrashDamage: 800,
    hyjalBossesDamage: 800,
    hyjalBossesTrashDamage: 400,
    unrankedCount: 2,
    characterCount: 2,
    hasUnranked: true,
    unrankedCharacters: [
      ['Unrankedone', CharacterClass.rogue],
      ['Healerone', CharacterClass.mage],
    ],
  },
  'raid damage summary should include per-metric totals and unranked non-healer characters',
);
