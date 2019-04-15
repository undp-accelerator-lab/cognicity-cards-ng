import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiredistanceRoutingModule } from './firedistance-routing.module';
import { FiredistanceComponent } from './firedistance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FiredistanceRoutingModule,
    FormsModule
  ],
  declarations: [FiredistanceComponent]
})
export class FiredistanceModule { }
