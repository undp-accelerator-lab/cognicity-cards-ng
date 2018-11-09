import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { SubmitSwipeComponent } from '../../../components/submit-swipe/submit-swipe.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule
  ],
  declarations: [ReviewComponent, SubmitSwipeComponent]
})
export class ReviewModule { }
