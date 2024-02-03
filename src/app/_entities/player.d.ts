import { Character } from "./character";
import { CharacterRole } from "./character-role.enum";

export interface Player {
  name: string;
  discord?: {
    userId?: string;
    className?: 'Bench'|'Absence'|'Late'|CharacterRole;
  },
  characters?: Character[];
}