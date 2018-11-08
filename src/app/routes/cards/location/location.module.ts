import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule
  ],
  declarations: [LocationComponent]
})
export class LocationModule { }
