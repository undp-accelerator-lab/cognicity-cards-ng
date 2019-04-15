import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiredistanceRoutingModule } from './firedistance-routing.module';
import { FiredistanceComponent } from './firedistance.component';
import { FormsModule } from '@angular/forms';
import { LocationModule } from '../location.module';

@NgModule({
  imports: [
    CommonModule,
    FiredistanceRoutingModule,
    LocationModule,
  ],
  declarations: [
    FiredistanceComponent, 
  ]
})
export class FiredistanceModule { }
