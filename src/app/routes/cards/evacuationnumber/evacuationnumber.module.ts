import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationnumberRoutingModule } from './evacuationnumber-routing.module';
import { EvacuationnumberComponent } from './evacuationnumber.component';

@NgModule({
  declarations: [EvacuationnumberComponent],
  imports: [
    CommonModule,
    EvacuationnumberRoutingModule
  ]
})
export class EvacuationnumberModule { }
