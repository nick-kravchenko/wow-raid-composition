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
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
      {
        name: 'Notalazy',
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
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Holy,
      },
      {
        name: 'Yoshkap',
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
        name: 'Kravá',
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Protection,
      },
      {
        name: 'Kravä',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Kravarlocka',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ],
  },
  {
    name: 'Cambells',
    discord: { userId: '307413040712777730' },
    characters: [
      {
        name: 'Cambels',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.mage,
        spec: CharacterSpecEnum.Arcane,
      },
      {
        name: 'Cambelish',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.Survival,
      },
    ],
  },
  {
    name: 'Bawowna',
    discord: { userId: '230324826747699200' },
    characters: [
      {
        name: 'Bawownahunt',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Fleabus',
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Restoration,
      },
    ],
  },
  {
    name: 'Dubasaw',
    discord: { userId: '526101639002587178' },
    characters: [
      {
        name: 'Dubasaw',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Dubasw',
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ],
  },
  {
    name: 'Lansena',
    discord: { userId: '360123145522249729' },
    characters: [
      {
        name: 'Lansena',
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
      {
        name: 'Mellorin',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Balance,
      },
    ],
  },
  {
    name: 'Edgelord',
    discord: { userId: '257947077324177411' },
    characters: [
      {
        name: 'Edgelørd',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Udy',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Shadow,
      },
    ],
  },
  {
    name: 'Brokentoy',
    discord: { userId: '234388219020443648' },
    characters: [
      {
        name: 'Brokentoy',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
      {
        name: 'Zabyjaka',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
    ],
  },
  {
    name: 'Antagonist',
    discord: { userId: '' },
    characters: [
      {
        name: 'Antagonist',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ],
  },
  {
    name: 'Entim',
    discord: { userId: '486541449568059402' },
    characters: [
      {
        name: 'Entim',
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Restoration,
      },
      {
        name: 'Entimx',
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
    ],
  },
  {
    name: 'Serjio',
    discord: { userId: '1322931563406688346' },
    characters: [
      {
        name: 'Serjioo',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.Survival,
      },
      {
        name: 'Serjioo Druid',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Balance,
      },
    ],
  },
  {
    name: 'Chaiser',
    discord: { userId: '353863554585067532' },
    characters: [
      {
        name: 'Chaiser',
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
      {
        name: 'Globaldoctor',
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Restoration,
      },
    ],
  },
  {
    name: 'Legalise',
    discord: { userId: '364448191724257280' },
    characters: [
      {
        name: 'Legalise',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
      {
        name: 'Tenten',
        rank: CharacterRank.alt,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
      {
        name: 'Alpine',
        rank: CharacterRank.alt,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
    ],
  },
  {
    name: 'Dontmissbyte',
    discord: { userId: '287674226440142848' },
    characters: [
      {
        name: 'Dontmissbyte',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
      {
        name: 'Kyivstar',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ],
  },
  {
    name: 'Strike',
    discord: { userId: '235195687996882954' },
    characters: [
      {
        name: 'Hellpapa',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Strikex',
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.rogue,
        spec: CharacterSpecEnum.Combat,
      },
    ],
  },
  {
    name: 'Swotch',
    discord: { userId: '226071331697852416' },
    characters: [
      {
        name: 'Swotchw',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Swotchww',
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
    ],
  },
  {
    name: 'Art',
    discord: { userId: '211134988119310337' },
    characters: [
      {
        name: 'Artlicht',
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
      {
        name: 'Cherepaha',
        rank: CharacterRank.alt,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ],
  },
  {
    name: 'Lloydaustin',
    discord: { userId: '625411819334270976' },
    characters: [
      {
        name: 'Llóydaustin',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Fury,
      },
      {
        name: 'Pigtasty',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
    ],
  },
  {
    name: 'Zulnani',
    discord: { userId: '521657297693573120' },
    characters: [
      {
        name: 'Zulnani',
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
      {
        name: 'Garhard',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ],
  },
  {
    name: 'Amorales',
    discord: { userId: '556582468002775050' },
    characters: [
      {
        name: 'Bozer',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
      {
        name: 'Amorales',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
    ],
  },
  {
    name: 'Greenbeam',
    discord: { userId: '240514249024077824' },
    characters: [
      {
        name: 'Greenbeam',
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Restoration,
      },
      {
        name: 'Mapleleaf',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Balance,
      },
    ],
  },
  {
    name: 'Renko',
    discord: { userId: '319831527821410316' },
    characters: [
      {
        name: 'Renko',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.rogue,
        spec: CharacterSpecEnum.Combat,
      },
      {
        name: 'Anyataylorj',
        rank: CharacterRank.alt,
        role: CharacterRole.tank,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Feral,
      },
      {
        name: 'Fantagodx',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.mage,
        spec: CharacterSpecEnum.Arcane,
      },
    ],
  },
  {
    name: 'Pappit',
    discord: { userId: '580756767148081152' },
    characters: [
      {
        name: 'Pappit',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Retribution,
      },
      {
        name: 'Puppit',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
    ],
  },
  {
    name: 'Hanzo',
    discord: { userId: '378933761007419393' },
    characters: [
      {
        name: 'Hanzo',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Fury,
      },
    ],
  },
  {
    name: 'Thundermate',
    discord: { userId: '247320467310903297' },
    characters: [
      {
        name: 'Thundermate',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
      {
        name: 'Blinkmate',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.mage,
        spec: CharacterSpecEnum.Arcane,
      },
    ],
  },
  {
    name: 'Rinn',
    discord: { userId: '244543163702837259' },
    characters: [
      {
        name: 'Rinn',
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
      {
        name: 'Figurehead',
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Restoration,
      },
    ],
  },
  {
    name: 'Akatoshi',
    discord: { userId: '509724063262834698' },
    characters: [
      {
        name: 'Akatoshi',
        rank: CharacterRank.main,
        role: CharacterRole.tank,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Protection,
      },
      {
        name: 'Chd',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Elemental,
      },
    ],
  },
  {
    name: 'Chortenya',
    discord: { userId: '163288553923543041' },
    characters: [
      {
        name: 'Chortenya',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.warlock,
        spec: CharacterSpecEnum.Destruction,
      },
      {
        name: 'Sypukha',
        rank: CharacterRank.alt,
        role: CharacterRole.ranged,
        class: CharacterClass.druid,
        spec: CharacterSpecEnum.Balance,
      },
    ],
  },
  {
    name: 'Ryzha',
    discord: { userId: '128246284447514624' },
    characters: [
      {
        name: 'Ryzhã',
        rank: CharacterRank.main,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
      {
        name: 'Ryzha',
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Holy,
      },
    ],
  },
  {
    name: 'Alarian',
    discord: { userId: '532245370944880640' },
    characters: [
      {
        name: 'Alarian',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.priest,
        spec: CharacterSpecEnum.Shadow,
      },
      {
        name: 'Romovababka',
        rank: CharacterRank.alt,
        role: CharacterRole.healer,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Holy,
      },
    ],
  },
  {
    name: 'Anvi',
    discord: { userId: '615983194709295196' },
    characters: [
      {
        name: 'Anvi',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.paladin,
        spec: CharacterSpecEnum.Retribution,
      },
    ],
  },
  {
    name: 'Sustainable',
    discord: { userId: '379260041066446849' },
    characters: [
      {
        name: 'Betonnyi',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.warrior,
        spec: CharacterSpecEnum.Arms,
      },
    ],
  },
  {
    name: 'Dullo',
    discord: { userId: '' },
    characters: [
      {
        name: 'Dullo',
        rank: CharacterRank.main,
        role: CharacterRole.melee,
        class: CharacterClass.shaman,
        spec: CharacterSpecEnum.Enhancement,
      },
    ],
  },
  {
    name: 'Monkablaze',
    discord: { userId: '' },
    characters: [
      {
        name: 'Monkablaze',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.mage,
        spec: CharacterSpecEnum.Arcane,
      },
    ],
  },
  {
    name: 'Manowarr',
    discord: { userId: '' },
    characters: [
      {
        name: 'Manowarr',
        rank: CharacterRank.main,
        role: CharacterRole.ranged,
        class: CharacterClass.hunter,
        spec: CharacterSpecEnum.BeastMastery,
      },
    ],
  },
];
