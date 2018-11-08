import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule
  ],
  declarations: [ReviewComponent]
})
export class ReviewModule { }
