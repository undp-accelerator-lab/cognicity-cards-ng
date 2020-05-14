import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpactRoutingModule } from './impact-routing.module';
import { ImpactComponent } from './impact.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [ImpactComponent],
  imports: [
    CommonModule,
    ImpactRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class ImpactModule { }
