import { CharacterClass } from '../_entities/character-class.enum';
import { CharacterRank } from '../_entities/character-rank.enum';
import { CharacterRole } from '../_entities/character-role.enum';
import { Player } from '../_entities/player';

export const players: Player[] = [
  {
    name: 'Krava',
    discord: { userId: '341841825847574528' },
    characters: [
      {name: 'Kravà', level: 60, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Kràvà', level: 60, rank: CharacterRank.alt, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Rinn',
    discord: { userId: '244543163702837259' },
    characters: [
      {name: 'Rinn', level: 60, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Lloydaustin',
    discord: { userId: '625411819334270976' },
    characters: [
      {name: 'Lloydaustin', level: 60, rank: CharacterRank.main, role: CharacterRole.tank, class: CharacterClass.warrior},
      {name: 'Beshketnik', level: 60, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Strikex',
    discord: { userId: '235195687996882954' },
    characters: [
      {name: 'Strikex', level: 60, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Hellpapa', level: 60, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.warlock},
    ]
  },
  {
    name: 'Watchmeflex',
    discord: { userId: '149965981081534466' },
    characters: [
      {name: 'Watchmeflex', level: 60, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
      {name: 'Pozhezha', level: 60, rank: CharacterRank.alt, role: CharacterRole.ranged, class: CharacterClass.mage},
    ]
  },
  {
    name: 'Artinrage',
    discord: { userId: '211134988119310337' },
    characters: [
      {name: 'Artinrage', level: 60, rank: CharacterRank.main, role: CharacterRole.melee, class: CharacterClass.warrior},
    ]
  },
  {
    name: 'Ryzha',
    discord: { userId: '128246284447514624' },
    characters: [
      {name: 'Ryzha', level: 60, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
    ]
  },
  {
    name: 'Vindsval',
    discord: { userId: '334727160241047553' },
    characters: [
      {name: 'Vindsval', level: 60, rank: CharacterRank.main, role: CharacterRole.healer, class: CharacterClass.priest},
    ]
  },
];
