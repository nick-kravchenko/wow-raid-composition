import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { AboutUtRoutingModule } from './about-ut-routing.module';



@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUtRoutingModule,
  ]
})
export class AboutUsModule { }
