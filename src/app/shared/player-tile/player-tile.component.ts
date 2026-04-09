import { Component, Input } from '@angular/core';
import { Player } from '../../_entities/player';
import { CharacterTileComponent } from '../character-tile/character-tile.component';

@Component({
  selector: 'app-player-tile',
  imports: [
    CharacterTileComponent,
  ],
  templateUrl: './player-tile.component.html',
  styleUrl: './player-tile.component.scss'
})
export class PlayerTileComponent {
  @Input() player!: Player;
  @Input() isWCLLinkVisible: boolean = false;
  @Input() isRankingsVisible: boolean = false;
  @Input() isGearVisible: boolean = false;
}
