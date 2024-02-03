import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/_entities/player';

@Component({
  selector: 'app-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.scss']
})
export class PlayerTileComponent implements OnInit {
  @Input() player!: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
