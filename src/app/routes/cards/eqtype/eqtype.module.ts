import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqtypeRoutingModule } from './eqtype-routing.module';
import { EqtypeComponent } from './eqtype.component';

@NgModule({
  imports: [
    CommonModule,
    EqtypeRoutingModule
  ],
  declarations: [EqtypeComponent]
})
export class EqtypeModule { }
