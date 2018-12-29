import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirqualityRoutingModule } from './airquality-routing.module';
import { AirqualityComponent } from './airquality.component';

@NgModule({
  imports: [
    CommonModule,
    AirqualityRoutingModule
  ],
  declarations: [AirqualityComponent]
})
export class AirqualityModule { }
