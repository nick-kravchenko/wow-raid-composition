import { Component, OnInit } from '@angular/core';
import { players } from '../_data/players.data';
import { Player } from '../_entities/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[] = players.sort((player1: Player, player2: Player) => {
    const p1MaxCharacters = player1.characters?.filter(character => character.level === 40).length;
    const p2MaxCharacters = player2.characters?.filter(character => character.level === 40).length;
    if (typeof p1MaxCharacters === 'undefined' || typeof p2MaxCharacters === 'undefined') {
      return 1;
    }
    return p1MaxCharacters === p2MaxCharacters
      ? player1.name > player2.name ? 1 : -1
      : p1MaxCharacters > p2MaxCharacters ? -1 : 1;
  }).map((player: Player) => ({
    ...player,
    characters: player.characters?.sort((character1, character2) => character1.level > character2.level ? -1 : 1),
  }));

  get charactersCount(): number {
    return players.reduce((acc, cur) => cur.characters ? acc + cur.characters.length : acc, 0);
  }

  get charactersMaxLevelCount(): number {
    return players.reduce((acc, cur) => cur.characters ? acc + cur.characters.filter(c => c.level === 40).length : acc, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
