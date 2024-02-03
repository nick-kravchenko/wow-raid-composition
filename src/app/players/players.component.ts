import { Component, OnInit } from '@angular/core';
import { players } from '../_data/players.data';
import { Player } from '../_entities/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[] = players;

  constructor() { }

  ngOnInit(): void {
  }

}
