import { CharacterClass } from './character-class.enum';
import {CharacterSpecEnum} from './character-spec.enum';


export interface WarriorArms {
  class: CharacterClass.warrior;
  spec: CharacterSpecEnum.Arms;
}
export interface WarriorFury {
  class: CharacterClass.warrior;
  spec: CharacterSpecEnum.Fury;
}
export interface WarriorProtection {
  class: CharacterClass.warrior;
  spec: CharacterSpecEnum.Protection;
}

export interface PaladinProtection {
  class: CharacterClass.paladin;
  spec: CharacterSpecEnum.Protection;
}
export interface PaladinHoly {
  class: CharacterClass.paladin;
  spec: CharacterSpecEnum.Holy;
}
export interface PaladinRetribution {
  class: CharacterClass.paladin;
  spec: CharacterSpecEnum.Retribution;
}

export interface HunterBeastMastery {
  class: CharacterClass.hunter;
  spec: CharacterSpecEnum.BeastMastery;
}
export interface HunterMarksmanship {
  class: CharacterClass.hunter;
  spec: CharacterSpecEnum.Marksmanship;
}
export interface HunterSurvival {
  class: CharacterClass.hunter;
  spec: CharacterSpecEnum.Survival;
}

export interface DruidBalance {
  class: CharacterClass.druid;
  spec: CharacterSpecEnum.Balance;
}
export interface DruidFeral {
  class: CharacterClass.druid;
  spec: CharacterSpecEnum.Feral;
}
export interface DruidRestoration {
  class: CharacterClass.druid;
  spec: CharacterSpecEnum.Restoration;
}

export interface RogueAssassination {
  class: CharacterClass.rogue;
  spec: CharacterSpecEnum.Assassination;
}
export interface RogueCombat {
  class: CharacterClass.rogue;
  spec: CharacterSpecEnum.Combat;
}
export interface RogueSubtlety {
  class: CharacterClass.rogue;
  spec: CharacterSpecEnum.Subtlety;
}

export interface WarlockAffliction {
  class: CharacterClass.warlock;
  spec: CharacterSpecEnum.Affliction;
}
export interface WarlockDemonology {
  class: CharacterClass.warlock;
  spec: CharacterSpecEnum.Demonology;
}
export interface WarlockDestruction {
  class: CharacterClass.warlock;
  spec: CharacterSpecEnum.Destruction;
}

export interface MageArcane {
  class: CharacterClass.mage;
  spec: CharacterSpecEnum.Arcane;
}
export interface MageFire {
  class: CharacterClass.mage;
  spec: CharacterSpecEnum.Fire;
}
export interface MageFrost {
  class: CharacterClass.mage;
  spec: CharacterSpecEnum.Frost;
}

export interface PriestHoly {
  class: CharacterClass.priest;
  spec: CharacterSpecEnum.Holy;
}
export interface PriestDiscipline {
  class: CharacterClass.priest;
  spec: CharacterSpecEnum.Discipline;
}
export interface PriestShadow {
  class: CharacterClass.priest;
  spec: CharacterSpecEnum.Shadow;
}

export interface ShamanElemental {
  class: CharacterClass.shaman;
  spec: CharacterSpecEnum.Elemental;
}
export interface ShamanEnhancement {
  class: CharacterClass.shaman;
  spec: CharacterSpecEnum.Enhancement;
}
export interface ShamanRestoration {
  class: CharacterClass.shaman;
  spec: CharacterSpecEnum.Restoration;
}

export type CharacterClassSpec = WarriorArms | WarriorFury | WarriorProtection
                               | PaladinProtection | PaladinHoly | PaladinRetribution
                               | HunterBeastMastery | HunterMarksmanship | HunterSurvival
                               | DruidBalance | DruidFeral | DruidRestoration
                               | RogueAssassination | RogueCombat | RogueSubtlety
                               | WarlockAffliction | WarlockDemonology | WarlockDestruction
                               | MageArcane | MageFire | MageFrost
                               | PriestHoly | PriestDiscipline | PriestShadow
                               | ShamanElemental | ShamanEnhancement | ShamanRestoration;
