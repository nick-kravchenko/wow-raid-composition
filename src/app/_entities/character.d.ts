import { CharacterClass } from './character-class.enum';
import { CharacterRank } from './character-rank.enum';
import { CharacterRole } from './character-role.enum';
import { Player } from './player';

export interface Character {
  name: string;
  level: number;
  class: CharacterClass;
  role: CharacterRole;
  rank: CharacterRank;
  player?: Player;
  highlight?: boolean;
}
