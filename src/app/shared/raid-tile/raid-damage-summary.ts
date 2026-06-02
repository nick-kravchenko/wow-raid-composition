import type { Character } from '../../_entities/character';
import { CharacterRole } from '../../_entities/character-role.enum';
import type { WclBakedCharacter, WclOverallRank } from '../../_data/wcl-baked.data';

type DamageMetric = 'dps-bosses' | 'dps-bosses-trash';
type HealingMetric = 'hps';

const REQUIRED_DAMAGE_RANKS: Array<{ raid: WclOverallRank['raid']; metric: DamageMetric }> = [
  { raid: 'ssc', metric: 'dps-bosses' },
  { raid: 'ssc', metric: 'dps-bosses-trash' },
  { raid: 'tk', metric: 'dps-bosses' },
  { raid: 'tk', metric: 'dps-bosses-trash' },
];

const REQUIRED_HEALING_RANKS: Array<{ raid: WclOverallRank['raid']; metric: HealingMetric }> = [
  { raid: 'ssc', metric: 'hps' },
  { raid: 'tk', metric: 'hps' },
];

export interface RaidDamageSummary {
  raidDps: number;
  raidHps: number;
  sscDamage: number;
  tkDamage: number;
  sscHealing: number;
  tkHealing: number;
  sscBossesDamage: number;
  sscBossesTrashDamage: number;
  tkBossesDamage: number;
  tkBossesTrashDamage: number;
  unrankedCount: number;
  characterCount: number;
  hasUnranked: boolean;
  unrankedCharacters: Character[];
}

export function buildRaidDamageSummary(
  raid: Array<Character | null | undefined>,
  characters: Record<string, WclBakedCharacter>,
): RaidDamageSummary {
  let sscDamage = 0;
  let tkDamage = 0;
  let sscHealing = 0;
  let tkHealing = 0;
  let sscBossesDamage = 0;
  let sscBossesTrashDamage = 0;
  let tkBossesDamage = 0;
  let tkBossesTrashDamage = 0;
  let unrankedCount = 0;
  let characterCount = 0;
  const unrankedCharacters: Character[] = [];

  for (const character of raid) {
    if (!character) continue;

    if (character.role === CharacterRole.healer) {
      const wclCharacter = characters[character.name.toLowerCase()];
      const ranks = wclCharacter?.overallRanks ?? [];
      let characterHasUnranked = !wclCharacter;

      for (const requiredRank of REQUIRED_HEALING_RANKS) {
        const rank = ranks.find(candidate =>
          candidate.raid === requiredRank.raid &&
          candidate.metric === requiredRank.metric
        );
        const bestAmount = rank?.bestAmount;

        if (typeof bestAmount !== 'number') {
          characterHasUnranked = true;
        }

        if (requiredRank.raid === 'ssc') {
          sscHealing += bestAmount ?? 0;
        } else {
          tkHealing += bestAmount ?? 0;
        }
      }

      if (characterHasUnranked) {
        unrankedCount++;
        unrankedCharacters.push(character);
      }

      continue;
    }

    characterCount++;
    const wclCharacter = characters[character.name.toLowerCase()];
    const ranks = wclCharacter?.overallRanks ?? [];
    let characterHasUnranked = !wclCharacter;

    for (const requiredRank of REQUIRED_DAMAGE_RANKS) {
      const rank = ranks.find(candidate =>
        candidate.raid === requiredRank.raid &&
        candidate.metric === requiredRank.metric
      );
      const bestAmount = rank?.bestAmount;

      if (typeof bestAmount !== 'number') {
        characterHasUnranked = true;
      }

      if (requiredRank.raid === 'ssc') {
        sscDamage += bestAmount ?? 0;
        if (requiredRank.metric === 'dps-bosses') {
          sscBossesDamage += bestAmount ?? 0;
        } else {
          sscBossesTrashDamage += bestAmount ?? 0;
        }
      } else {
        tkDamage += bestAmount ?? 0;
        if (requiredRank.metric === 'dps-bosses') {
          tkBossesDamage += bestAmount ?? 0;
        } else {
          tkBossesTrashDamage += bestAmount ?? 0;
        }
      }
    }

    if (characterHasUnranked) {
      unrankedCount++;
      unrankedCharacters.push(character);
    }
  }

  return {
    raidDps: Math.round((sscDamage + tkDamage) / 4),
    raidHps: Math.round((sscHealing + tkHealing) / 2),
    sscDamage: Math.round(sscDamage),
    tkDamage: Math.round(tkDamage),
    sscHealing: Math.round(sscHealing),
    tkHealing: Math.round(tkHealing),
    sscBossesDamage: Math.round(sscBossesDamage),
    sscBossesTrashDamage: Math.round(sscBossesTrashDamage),
    tkBossesDamage: Math.round(tkBossesDamage),
    tkBossesTrashDamage: Math.round(tkBossesTrashDamage),
    unrankedCount,
    characterCount,
    hasUnranked: unrankedCount > 0,
    unrankedCharacters,
  };
}

export function formatRaidDamage(value: number): string {
  return value.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });
}
