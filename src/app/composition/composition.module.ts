import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CompositionRoutingModule } from './composition-routing.module';
import { CompositionComponent } from './composition.component';
import { SharedModule } from '../shared/shared.module';
import { CompositionService } from './composition.service';

@NgModule({
  declarations: [
    CompositionComponent,
  ],
  imports: [
    CommonModule,
    CompositionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CompositionService,
  ],
})
export class CompositionModule { }
