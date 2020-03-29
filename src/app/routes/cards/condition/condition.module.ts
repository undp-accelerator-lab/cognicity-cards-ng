import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionRoutingModule } from './condition-routing.module';
import { ConditionComponent } from './condition.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [ConditionComponent],
  imports: [
    CommonModule,
    ConditionRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class ConditionModule { }
