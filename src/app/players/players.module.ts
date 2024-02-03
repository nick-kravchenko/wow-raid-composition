import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PlayersComponent,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule,
  ]
})
export class PlayersModule { }
