import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../_entities/player';
import {CharacterTileComponent} from '../character-tile/character-tile.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-player-tile',
  imports: [
    CharacterTileComponent,
    NgForOf
  ],
  templateUrl: './player-tile.component.html',
  styleUrl: './player-tile.component.scss'
})
export class PlayerTileComponent implements OnInit {
  @Input() player!: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
