import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirqualityRoutingModule } from './airquality-routing.module';
import { AirqualityComponent } from './airquality.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AirqualityRoutingModule,
    TranslateModule
  ],
  declarations: [AirqualityComponent],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class AirqualityModule { }
