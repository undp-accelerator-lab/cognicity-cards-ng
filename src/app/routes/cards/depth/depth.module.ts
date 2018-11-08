import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepthRoutingModule } from './depth-routing.module';
import { DepthComponent } from './depth.component';

@NgModule({
  imports: [
    CommonModule,
    DepthRoutingModule
  ],
  declarations: [DepthComponent]
})
export class DepthModule { }
