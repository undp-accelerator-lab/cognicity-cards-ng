import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindstructureRoutingModule } from './windstructure-routing.module';
import { WindstructureComponent } from './windstructure.component';

@NgModule({
  declarations: [WindstructureComponent],
  imports: [
    CommonModule,
    WindstructureRoutingModule
  ]
})
export class WindstructureModule { }
