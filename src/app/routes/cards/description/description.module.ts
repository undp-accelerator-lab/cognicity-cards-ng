import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionRoutingModule
  ],
  declarations: [DescriptionComponent]
})
export class DescriptionModule { }
