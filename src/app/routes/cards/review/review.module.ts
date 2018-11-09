import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review.component';
import { SubmitSwipeComponent } from '../../../components/submit-swipe/submit-swipe.component';
import { ReportReviewComponent } from '../../../components/report-review/report-review.component';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule
  ],
  declarations: [ReviewComponent, SubmitSwipeComponent, ReportReviewComponent]
})
export class ReviewModule { }
