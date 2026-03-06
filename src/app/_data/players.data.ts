import { CharacterRank } from '../_entities/character-rank.enum';
import { Player } from '../_entities/player';
import { CharacterRole } from '../_entities/character-role.enum';
import { CharacterClass } from '../_entities/character-class.enum';
import { CharacterSpecEnum } from '../_entities/character-spec.enum';

export const players: Player[] = [
  {
    name: 'Lazykit',
    characters: [
      {
        name: 'Lazykit',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
      {
        name: 'Notalazy',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Retribution,
      },
    ],
  },
  {
    name: 'Palayoshka',
    characters: [
      {
        name: 'Palayoshka',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Holy,
      },
      {
        name: 'Yoshkap',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
    ],
  },
  {
    name: 'Krava',
    characters: [
      {
        name: 'Krava',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Kravá',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Fury,
      },
    ]
  },
  {
    name: 'Cambells',
    characters: [
      {
        name: 'Cambells',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.mage,
        spec: CharacterSpecEnum.Arcane,
      },
      {
        name: 'Cambelish',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
    ]
  },
  {
    name: 'Bawowna',
    characters: [
      {
        name: 'Bawownahunt',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Fleabus',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
    ]
  },
  {
    name: 'Dubasaw',
    characters: [
      {
        name: 'Dubasaw',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Dubasw',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ]
  },
  {
    name: 'Lansena',
    characters: [
      {
        name: 'Lansena',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
      {
        name: 'Melorin',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Restoration,
      },
    ]
  },
  {
    name: 'Edgelord',
    characters: [
      {
        name: 'Edgelord',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Udy',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Shadow,
      },
    ]
  },
  {
    name: 'Brokentoy',
    characters: [
      {
        name: 'Brokentoy',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
      {
        name: 'Zabyjaka',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
    ]
  },
  {
    name: 'Entim',
    characters: [
      {
        name: 'Entim',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Restoration,
      },
      {
        name: 'Entimx',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
    ]
  },
  {
    name: 'Serjio',
    characters: [
      {
        name: 'Serjioo',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Serjioo Druid',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Balance,
      },
    ]
  },
  {
    name: 'Chaiser',
    characters: [
      {
        name: 'Chaiser',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
      {
        name: 'Globaldoctor',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Restoration,
      },
    ]
  },
  {
    name: 'Legalise',
    characters: [
      {
        name: 'Legalise',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Tenten',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
    ]
  },
  {
    name: 'Dontmissbyte',
    characters: [
      {
        name: 'Dontmissbyte',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
      {
        name: 'Kyivstar',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ]
  },
  {
    name: 'Strike',
    characters: [
      {
        name: 'Hellpapa',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Strikex',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.rogue,
        spec: CharacterSpecEnum.Assassination,
      },
    ]
  },
  {
    name: 'Saigha',
    characters: [
      {
        name: 'Saigha',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Watchmeflex',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Fury,
      },
    ]
  },
  {
    name: 'Swotch',
    characters: [
      {
        name: 'Swotch',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Swotchw',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
    ]
  },
  {
    name: 'Art',
    characters: [
      {
        name: 'Art',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Retribution,
      },
      {
        name: 'Cherepaha',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ]
  },
  {
    name: 'Lloydaustin',
    characters: [
      {
        name: 'Lloydaustin',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Fury,
      },
      {
        name: 'Pigtasty',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
    ]
  },
  {
    name: 'Zulnani',
    characters: [
      {
        name: 'Zulnani',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
      {
        name: 'Garhard',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ]
  },
  {
    name: 'Amorales',
    characters: [
      {
        name: 'Amorales',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Bozer',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
    ]
  },
  {
    name: 'Greenbeam',
    characters: [
      {
        name: 'Greenbeam',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Restoration,
      },
      {
        name: 'Mapleleaf',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Restoration,
      },
    ]
  },
  {
    name: 'Biruang',
    characters: [
      {
        name: 'Biruang',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Biruang Paladin',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
    ]
  },
  {
    name: 'Renko',
    characters: [
      {
        name: 'Renko',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.rogue,
        spec: CharacterSpecEnum.Combat,
      },
      {
        name: 'Anyataylorj',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
    ]
  },
  {
    name: 'Pappit',
    characters: [
      {
        name: 'Pappit',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Retribution,
      },
      {
        name: 'Puppit',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
    ]
  },
  {
    name: 'Spectris',
    characters: [
      {
        name: 'Spectris',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
      {
        name: 'Peskit',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ]
  },
  {
    name: 'Hanzo',
    characters: [
      {
        name: 'Hanzo',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Fury,
      },
    ]
  },
  {
    name: 'Thundermate',
    characters: [
      {
        name: 'Thundermate',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
      {
        name: 'Thundermate Alt',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.mage,
        spec: CharacterSpecEnum.Arcane,
      },
    ]
  },
  {
    name: 'Rinn',
    characters: [
      {
        name: 'Rinn',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
      {
        name: 'Figurehead',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Restoration,
      },
    ]
  },
  {
    name: 'Akatoshi',
    characters: [
      {
        name: 'Akatoshi',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
      {
        name: 'Akatoshi SP',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Shadow,
      },
    ]
  },
  {
    name: 'Chortenya',
    characters: [
      {
        name: 'Chortenya',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Sipukha',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Balance,
      },
    ]
  },
  {
    name: 'Ryzha',
    characters: [
      {
        name: 'Ryzha',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
      {
        name: 'Ryzha Alt',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
    ]
  },
  {
    name: 'Alarian',
    characters: [
      {
        name: 'Alarian',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Shadow,
      },
      {
        name: 'Romovababka',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Holy,
      },
    ]
  },
  {
    name: 'Anvi',
    characters: [
      {
        name: 'Anvi',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Retribution,
      },
    ]
  },
];
