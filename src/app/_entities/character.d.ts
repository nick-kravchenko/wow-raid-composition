import { CharacterRank } from './character-rank.enum';
import { CharacterRole } from './character-role.enum';
import { Player } from './player';
import { CharacterClassSpec } from './character-class-spec';

export interface Character extends CharacterClassSpec {
  name: string;
  level: number;
  class: CharacterClassSpec['class'];
  spec: CharacterClassSpec['spec'];
  role: CharacterRole;
  rank: CharacterRank;
  player?: Player;
  highlight?: boolean;
}
