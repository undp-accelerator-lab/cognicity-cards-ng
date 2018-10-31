import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FloodModule } from '../decks/flood/flood.module';
import { LocationComponent } from '../cards/location/location.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    FloodModule,
  ],
  declarations: [LandingComponent, LocationComponent]
})
export class LandingModule { }
