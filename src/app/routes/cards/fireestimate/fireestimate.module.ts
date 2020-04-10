import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FireestimateRoutingModule } from './fireestimate-routing.module';
import { FireestimateComponent } from './fireestimate.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FireestimateRoutingModule,
    TranslateModule
  ],
  declarations: [FireestimateComponent],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class FireestimateModule { }
