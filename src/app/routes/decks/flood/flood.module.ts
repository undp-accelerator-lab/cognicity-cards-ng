import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloodRoutingModule } from './flood-routing.module';

import { FloodComponent } from './flood.component';
import { LocationComponent } from '../../cards/location/location.component';

@NgModule({
  imports: [
    CommonModule,
    FloodRoutingModule
  ],
  declarations: [FloodComponent, LocationComponent]
})
export class FloodModule { }
