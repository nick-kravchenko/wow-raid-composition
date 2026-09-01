import type { Character } from '../../_entities/character';
import { CharacterRole } from '../../_entities/character-role.enum';
import type { WclBakedCharacter, WclOverallRank } from '../../_data/wcl-baked.data';

type DamageMetric = 'dps-bosses' | 'dps-bosses-trash';
type HealingMetric = 'hps';

const REQUIRED_DAMAGE_RANKS: Array<{ raid: WclOverallRank['raid']; metric: DamageMetric }> = [
  { raid: 'bt', metric: 'dps-bosses' },
  { raid: 'bt', metric: 'dps-bosses-trash' },
  { raid: 'hyjal', metric: 'dps-bosses' },
  { raid: 'hyjal', metric: 'dps-bosses-trash' },
];

const REQUIRED_HEALING_RANKS: Array<{ raid: WclOverallRank['raid']; metric: HealingMetric }> = [
  { raid: 'bt', metric: 'hps' },
  { raid: 'hyjal', metric: 'hps' },
];

export interface RaidDamageSummary {
  raidDps: number;
  raidHps: number;
  btDamage: number;
  hyjalDamage: number;
  btHealing: number;
  hyjalHealing: number;
  btBossesDamage: number;
  btBossesTrashDamage: number;
  hyjalBossesDamage: number;
  hyjalBossesTrashDamage: number;
  unrankedCount: number;
  characterCount: number;
  hasUnranked: boolean;
  unrankedCharacters: Character[];
}

export function buildRaidDamageSummary(
  raid: Array<Character | null | undefined>,
  characters: Record<string, WclBakedCharacter>,
): RaidDamageSummary {
  let btDamage = 0;
  let hyjalDamage = 0;
  let btHealing = 0;
  let hyjalHealing = 0;
  let btBossesDamage = 0;
  let btBossesTrashDamage = 0;
  let hyjalBossesDamage = 0;
  let hyjalBossesTrashDamage = 0;
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

        if (requiredRank.raid === 'bt') {
          btHealing += bestAmount ?? 0;
        } else {
          hyjalHealing += bestAmount ?? 0;
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

      if (requiredRank.raid === 'bt') {
        btDamage += bestAmount ?? 0;
        if (requiredRank.metric === 'dps-bosses') {
          btBossesDamage += bestAmount ?? 0;
        } else {
          btBossesTrashDamage += bestAmount ?? 0;
        }
      } else {
        hyjalDamage += bestAmount ?? 0;
        if (requiredRank.metric === 'dps-bosses') {
          hyjalBossesDamage += bestAmount ?? 0;
        } else {
          hyjalBossesTrashDamage += bestAmount ?? 0;
        }
      }
    }

    if (characterHasUnranked) {
      unrankedCount++;
      unrankedCharacters.push(character);
    }
  }

  return {
    raidDps: Math.round((btDamage + hyjalDamage) / 4),
    raidHps: Math.round((btHealing + hyjalHealing) / 2),
    btDamage: Math.round(btDamage),
    hyjalDamage: Math.round(hyjalDamage),
    btHealing: Math.round(btHealing),
    hyjalHealing: Math.round(hyjalHealing),
    btBossesDamage: Math.round(btBossesDamage),
    btBossesTrashDamage: Math.round(btBossesTrashDamage),
    hyjalBossesDamage: Math.round(hyjalBossesDamage),
    hyjalBossesTrashDamage: Math.round(hyjalBossesTrashDamage),
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
