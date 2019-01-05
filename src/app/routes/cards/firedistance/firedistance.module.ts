import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiredistanceRoutingModule } from './firedistance-routing.module';
import { FiredistanceComponent } from './firedistance.component';

@NgModule({
  imports: [
    CommonModule,
    FiredistanceRoutingModule
  ],
  declarations: [FiredistanceComponent]
})
export class FiredistanceModule { }
