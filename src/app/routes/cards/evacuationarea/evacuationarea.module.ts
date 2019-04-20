import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationareaRoutingModule } from './evacuationarea-routing.module';
import { EvacuationareaComponent } from './evacuationarea.component';

@NgModule({
  declarations: [EvacuationareaComponent],
  imports: [
    CommonModule,
    EvacuationareaRoutingModule
  ]
})
export class EvacuationareaModule { }
