import { CharacterRank } from '../_entities/character-rank.enum';
import { Player } from '../_entities/player';
import { CharacterRole } from '../_entities/character-role.enum';
import { CharacterClass } from '../_entities/character-class.enum';
import { CharacterSpecEnum } from '../_entities/character-spec.enum';

export const players: Player[] = [
  {
    name: 'Lazykit',
    discord: { userId: '298460716904611840' },
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
    discord: { userId: '193687671359406080' },
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
    discord: { userId: '341841825847574528' },
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
    discord: { userId: '307413040712777730' },
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
        spec: CharacterSpecEnum.Survival,
      },
    ]
  },
  {
    name: 'Bawowna',
    discord: { userId: '230324826747699200' },
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
        spec: CharacterSpecEnum.Restoration,
      },
    ]
  },
  {
    name: 'Dubasaw',
    discord: { userId: '526101639002587178' },
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
    discord: { userId: '360123145522249729' },
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
        spec: CharacterSpecEnum.Balance,
      },
    ]
  },
  {
    name: 'Edgelord',
    discord: { userId: '257947077324177411' },
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
    discord: { userId: '234388219020443648' },
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
    discord: { userId: '486541449568059402' },
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
    discord: { userId: '1322931563406688346' },
    characters: [
      {
        name: 'Serjioo',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.Survival,
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
    discord: { userId: '353863554585067532' },
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
    discord: { userId: '364448191724257280' },
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
    discord: { userId: '287674226440142848' },
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
    discord: { userId: '235195687996882954' },
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
        spec: CharacterSpecEnum.Combat,
      },
    ]
  },
  {
    name: 'Swotch',
    discord: { userId: '226071331697852416' },
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
    discord: { userId: '211134988119310337' },
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
    discord: { userId: '625411819334270976' },
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
    discord: { userId: '521657297693573120' },
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
    discord: { userId: '556582468002775050' },
    characters: [
      {
        name: 'Bozer',
        level: 70,
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
      {
        name: 'Amorales',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ]
  },
  {
    name: 'Greenbeam',
    discord: { userId: '240514249024077824' },
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
    discord: { userId: '840952972850233375' },
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
    discord: { userId: '319831527821410316' },
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
    discord: { userId: '580756767148081152' },
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
    name: 'Hanzo',
    discord: { userId: '378933761007419393' },
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
    discord: { userId: '247320467310903297' },
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
    discord: { userId: '244543163702837259' },
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
    discord: { userId: '509724063262834698' },
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
        name: 'Chd',
        level: 70,
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
    ]
  },
  {
    name: 'Chortenya',
    discord: { userId: '163288553923543041' },
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
    discord: { userId: '128246284447514624' },
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
    discord: { userId: '532245370944880640' },
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
    discord: { userId: '615983194709295196' },
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
