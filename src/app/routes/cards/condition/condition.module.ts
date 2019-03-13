import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionRoutingModule } from './condition-routing.module';
import { ConditionComponent } from './condition.component';

@NgModule({
  declarations: [ConditionComponent],
  imports: [
    CommonModule,
    ConditionRoutingModule
  ]
})
export class ConditionModule { }
