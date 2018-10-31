import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloodRoutingModule } from './flood-routing.module';
import { FloodComponent } from './flood.component';

@NgModule({
  imports: [
    CommonModule,
    FloodRoutingModule
  ],
  declarations: [FloodComponent]
})
export class FloodModule { }
