import { CharacterClass } from '../_entities/character-class.enum';
import { CharacterRank } from '../_entities/character-rank.enum';
import { CharacterRole } from '../_entities/character-role.enum';
import { Player } from '../_entities/player';

export const players: Player[] = [
  {
    name: 'Krava',
    discord: { userId: '341841825847574528' },
    characters: [
      {name: 'Krava', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Kravà', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.warlock},
      {name: 'Kravá', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Kravâ', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Vindsval',
    discord: { userId: '334727140241047553' },
    characters: [
      {name: 'Vindsval', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Watain', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Necrolust', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Lloydaustin',
    discord: { userId: '625411819334270976' },
    characters: [
      {name: 'Lloydaustin', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Rkin', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.rogue},
    ]
  },
  {
    name: 'Sion',
    discord: { userId: '1172462949818970133' },
    characters: [
      {name: 'Sion', level: 25, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Strike',
    discord: { userId: '235195687996882954' },
    characters: [
      {name: 'Strike', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.warlock},
      {name: 'Strikerok', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Sckold',
    discord: { userId: '335448138129211403' },
    characters: [
      {name: 'Sckold', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.rogue},
      {name: 'Holighty', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Ryzha',
    discord: { userId: '128246284447514624' },
    characters: [
      {name: 'Ryzha', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
      {name: 'Ryzhâ', level: 25, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Ensitu',
    discord: { userId: '471337826781495297' },
    characters: [
      {name: 'Ensitu', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.paladin},
      {name: 'Darqsat', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.rogue},
      {name: 'Darqsad', level: 25, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
      {name: 'Fixik', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.mage},
      {name: 'Akantamebiaz', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Gachimane',
    discord: { userId: '149965981081534466' },
    characters: [
      {name: 'Gachimane', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.paladin},
      {name: 'Pozhezha', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.mage},
      {name: 'Watchmeflex', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Panibavovna',
    discord: { userId: '352895751082213377' },
    characters: [
      {name: 'Panibavovna', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Fleolix',
    discord: { userId: '1145300919152541757' },
    characters: [
      {name: 'Fleolix', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Fleo', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Odessit',
    discord: { userId: '185128538741932032' },
    characters: [
      {name: 'Odessit', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
    ]
  },
  {
    name: 'Dartuas',
    discord: { userId: '224987565806059530' },
    characters: [
      {name: 'Dartuas', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.druid},
      {name: 'Dartuasik', level: 25, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
      {name: 'Serjantnosok', level: 40, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Artshaper',
    discord: { userId: '211134988119310337' },
    characters: [
      {name: 'Artshaper', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.druid},
      {name: 'Artholylight', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.paladin},
      {name: 'Artinrage', level: 35, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Artsinister', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.rogue},
      {name: 'Artilery', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Vognikvognik', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Elidisa',
    discord: { userId: '521657297693573120' },
    characters: [
      {name: 'Elidisa', level: 25, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Drulka',
    discord: { userId: '294155492027006989' },
    characters: [
      {name: 'Drulka', level: 25, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.druid},
      {name: 'Niameya', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Tamioka',
    discord: { userId: '1012404881656647720' },
    characters: [
      {name: 'Tamioka', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },

  {
    name: 'Souleater',
    discord: { userId: '1018985851864227870' },
    characters: [
      {name: 'Souleater', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Dacon',
    discord: { userId: '289927099035287552' },
    characters: [
      {name: 'Dacon', level: 25, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Filin',
    discord: { userId: '358759514788593674' },
    characters: [
      {name: 'Filin', level: 25, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.druid},
    ]
  },
];
