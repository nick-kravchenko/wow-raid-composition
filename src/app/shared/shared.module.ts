import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerTileComponent } from './player-tile/player-tile.component';
import { CharacterTileComponent } from './character-tile/character-tile.component';
import { RaidTileComponent } from './raid-tile/raid-tile.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { WclService } from './services/wcl.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PlayerTileComponent,
    CharacterTileComponent,
    RaidTileComponent,
    LayoutComponent,
  ],
  exports: [
    PlayerTileComponent,
    CharacterTileComponent,
    RaidTileComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    WclService,
  ]
})
export class SharedModule { }
