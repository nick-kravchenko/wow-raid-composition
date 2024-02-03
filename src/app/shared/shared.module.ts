import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTileComponent } from './player-tile/player-tile.component';
import { CharacterTileComponent } from './character-tile/character-tile.component';
import { RaidTileComponent } from './raid-tile/raid-tile.component';



@NgModule({
  declarations: [
    PlayerTileComponent,
    CharacterTileComponent,
    RaidTileComponent,
  ],
  exports: [
    PlayerTileComponent,
    CharacterTileComponent,
    RaidTileComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
