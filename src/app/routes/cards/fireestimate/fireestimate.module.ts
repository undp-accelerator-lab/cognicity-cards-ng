import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireestimateRoutingModule } from './fireestimate-routing.module';
import { FireestimateComponent } from './fireestimate.component';

@NgModule({
  imports: [
    CommonModule,
    FireestimateRoutingModule
  ],
  declarations: [FireestimateComponent]
})
export class FireestimateModule { }
