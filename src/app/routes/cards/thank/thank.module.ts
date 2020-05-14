import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankRoutingModule } from './thank-routing.module';
import { ThankComponent } from './thank.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ThankRoutingModule,
    TranslateModule
  ],
  declarations: [ThankComponent],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class ThankModule { }
