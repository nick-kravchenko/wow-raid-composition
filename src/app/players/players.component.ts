import { Component } from '@angular/core';
import { players } from '../_data/players.data';
import { Player } from '../_entities/player';
import { PlayerTileComponent } from '../shared/player-tile/player-tile.component';
import { Character } from '../_entities/character';
import { CharacterRank } from '../_entities/character-rank.enum';

@Component({
  selector: 'app-players',
  imports: [
    PlayerTileComponent
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {
  players: Player[] = players.sort((player1: Player, player2: Player) => {
    const main1 = player1.characters!.find((character: Character) => character.rank === CharacterRank.main);
    const main2 = player2.characters!.find((character: Character) => character.rank === CharacterRank.main);
    if (main1 && main2) {
      if (main1.class === main2.class) {
        return main1.spec > main2.spec ? 1 : -1
      }
      return main1.class > main2.class ? 1 : -1
    }
    return player1.name > player2.name ? 1 : -1
  });

  get charactersCount(): number {
    return players.reduce((acc, cur) => cur.characters ? acc + cur.characters.length : acc, 0);
  }
}
