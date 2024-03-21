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
      {name: 'Kravà', level: 40, rank: CharacterRank.alt, role: CharacterRole.tank, class: CharacterClass.warlock},
      {name: 'Kravá', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Kravâ', level: 40, rank: CharacterRank.alt, role: CharacterRole.tank, class: CharacterClass.druid},
      {name: 'Kravæ', level: 40, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
      {name: 'Kràva', level: 40, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
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
      {name: 'Opillya', level: 28, rank: CharacterRank.alt, role: CharacterRole.healer, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Sion',
    discord: { userId: '1172462949818970133' },
    characters: [
      {name: 'Sion', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Mothgrinder', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Strike',
    discord: { userId: '235195687996882954' },
    characters: [
      {name: 'Strike', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.warlock},
      {name: 'Strikerok', level: 25, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Arminx', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Sckold',
    discord: { userId: '335448138129211403' },
    characters: [
      {name: 'Holighty', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.paladin},
      {name: 'Sckold', level: 40, rank: CharacterRank.alt, role: CharacterRole.tank, class: CharacterClass.rogue},
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
      {name: 'Fleo', level: 40, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.paladin},
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
      {name: 'Artinrage', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
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
      {name: 'Souleaterl', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.warlock},
      {name: 'Revas', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.hunter},
      {name: 'Shadoweaterl', level: 40, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Gotcreamed',
    discord: { userId: '232942066374541322' },
    characters: [
      {name: 'Gotcreamed', level: 40, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Chemical',
    discord: { userId: '211390214248202241' },
    characters: [
      {name: 'Chemical', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Drio',
    discord: { userId: '545969192763916288' },
    characters: [
      {name: 'Drio', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Chopko',
    discord: { userId: '405403687016595456' },
    characters: [
      {name: 'Chopko', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Plotnopopik',
    discord: { userId: '326449882401341441' },
    characters: [
      {name: 'Plotnopopik', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Senninka',
    discord: { userId: '318008086872981504' },
    characters: [
      {name: 'Senninka', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Nizkosrushch',
    discord: { userId: '267337287577108482' },
    characters: [
      {name: 'Nizkosrushch', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
    ]
  },
  {
    name: 'Tepesh',
    discord: { userId: '267337287577108482' },
    characters: [
      {name: 'Tepesh', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
    ]
  },
  {
    name: 'Cmpixa',
    discord: { userId: '317645714765119488' },
    characters: [
      {name: 'Bkompe', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.druid},
      {name: 'Lilbelly', level: 25, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Porche',
    discord: { userId: '259729460696186880' },
    characters: [
      {name: 'Porche', level: 40, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.druid},
    ]
  },
  {
    name: 'Rinn',
    discord: { userId: '244543163702837259' },
    characters: [
      {name: 'Brutaliity', level: 40, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.paladin},
    ]
  },
  {
    name: 'Minerv',
    discord: { userId: '324913033270788097' },
    characters: [
      {name: 'Keknerv', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Vinika',
    discord: { userId: '324913033270788097' },
    characters: [
      {name: 'Vinika', level: 40, rank: CharacterRank.main, role: CharacterRole.ranged, class: CharacterClass.hunter},
    ]
  },
];
