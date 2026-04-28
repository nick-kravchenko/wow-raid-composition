import {Component, computed, Signal} from '@angular/core';
import { players } from '../_data/players.data';
import { CharacterTileComponent } from '../shared/character-tile/character-tile.component';
import { RouterLink } from '@angular/router';
import { Character } from '../_entities/character';

interface CharacterSpecGroup {
  spec: Character['spec'];
  characters: Character[];
}

interface CharacterClassGroup {
  class: Character['class'];
  characters: Character[];
}


@Component({
  selector: 'app-characters',
  imports: [
    CharacterTileComponent,
    RouterLink
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  private readonly characters: Character[] = players
    .reduce((acc: Character[], player) => [...acc, ...(player?.characters || [])], [])
    .sort((character1, character2) => {
      if (character1.spec !== character2.spec) return character1.spec > character2.spec ? 1 : -1;
      if (character1.class !== character2.class) return character1.class > character2.class ? 1 : -1;
      if (character1.name === character2.name) return 0;
      return character1.name > character2.name ? 1 : -1;
    });

  charactersBySpec = computed(() => {
    return this.characters.reduce((acc: CharacterSpecGroup[], character) => {
      const lastGroup = acc[acc.length - 1];

      if (!lastGroup || lastGroup.spec !== character.spec) {
        acc.push({ spec: character.spec, characters: [character] });
        return acc;
      }

      lastGroup.characters.push(character);
      return acc;
    }, []);
  });

  charactersByClass: Signal<CharacterClassGroup[]> = computed(() => {
    const map = this.characters.reduce<Record<Character['class'], Character[]>>((acc, character) => {
      (acc[character.class] ??= []).push(character);
      return acc;
    }, {} as Record<Character['class'], Character[]>);

    return Object.entries(map).map(([cls, characters]) => ({
      class: cls as Character['class'],
      characters,
    }));
  });
}
