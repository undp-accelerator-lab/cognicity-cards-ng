import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankRoutingModule } from './thank-routing.module';
import { ThankComponent } from './thank.component';

@NgModule({
  imports: [
    CommonModule,
    ThankRoutingModule
  ],
  declarations: [ThankComponent]
})
export class ThankModule { }
