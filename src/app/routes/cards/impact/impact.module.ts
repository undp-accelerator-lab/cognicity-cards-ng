import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpactRoutingModule } from './impact-routing.module';
import { ImpactComponent } from './impact.component';

@NgModule({
  declarations: [ImpactComponent],
  imports: [
    CommonModule,
    ImpactRoutingModule
  ]
})
export class ImpactModule { }
