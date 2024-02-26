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
      {name: 'Kravá', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Kravâ', level: 40, rank: CharacterRank.alt, role: CharacterRole.tank, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Vindsval',
    discord: { userId: '334727140241047553' },
    characters: [
      {name: 'Vindsval', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Watain', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Necrolust', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.warlock},
      {name: 'Darkspace', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Lloydaustin',
    discord: { userId: '625411819334270976' },
    characters: [
      {name: 'Lloydaustin', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Rkin', level: 40, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.rogue},
      {name: 'Opillya', level: 40, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
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
      {name: 'Arminx', level: 38, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Sckold',
    discord: { userId: '335448138129211403' },
    characters: [
      {name: 'Sckold', level: 40, rank: CharacterRank.alt, role: CharacterRole.tank, class: CharacterClass.rogue},
      {name: 'Holighty', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Ryzha',
    discord: { userId: '128246284447514624' },
    characters: [
      {name: 'Ryzha', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
      {name: 'Ryzhâ', level: 37, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
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
      {name: 'Voidshaker', level: 25, rank: CharacterRank.alt, role: CharacterRole.tank, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Tomsawyer',
    discord: { userId: '471337826781495297' },
    characters: [
      {name: 'Tomsawyer', level: 34, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Gachimane',
    discord: { userId: '149965981081534466' },
    characters: [
      {name: 'Gachimane', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.paladin},
      {name: 'Pozhezha', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.mage},
      {name: 'Watchmeflex', level: 40, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
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
      {name: 'Ocmpeiko', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Odessit', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Dartuas',
    discord: { userId: '224987565806059530' },
    characters: [
      {name: 'Dartuas', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.druid},
      {name: 'Dartuasik', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
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
      {name: 'Elidisa', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.druid},
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
      {name: 'Revas', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
    ]
  },
  {
    name: 'Gotcreamed',
    discord: { userId: '' },
    characters: [
      {name: 'Gotcreamed', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Chemical',
    discord: { userId: '' },
    characters: [
      {name: 'Chemical', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Drio',
    discord: { userId: '' },
    characters: [
      {name: 'Drio', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Chopko',
    discord: { userId: '' },
    characters: [
      {name: 'Chopko', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Plotnopopik',
    discord: { userId: '' },
    characters: [
      {name: 'Plotnopopik', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Senninka',
    discord: { userId: '' },
    characters: [
      {name: 'Senninka', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Nizkosrusch',
    discord: { userId: '' },
    characters: [
      {name: 'Nizkosrusch', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
    ]
  },
  {
    name: 'Podoshva',
    discord: { userId: '' },
    characters: [
      {name: 'Podoshva', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Cmpixa',
    discord: { userId: '' },
    characters: [
      {name: 'Bkompe', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.druid},
      {name: 'Lilbelly', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Porsche',
    discord: { userId: '' },
    characters: [
      {name: 'Porsche', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Rinn',
    discord: { userId: '' },
    characters: [
      {name: 'Brutality', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Minerv',
    discord: { userId: '' },
    characters: [
      {name: 'Keknerv', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.priest},
    ]
  },
];
