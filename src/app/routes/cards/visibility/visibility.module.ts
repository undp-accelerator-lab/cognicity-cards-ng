import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisibilityRoutingModule } from './visibility-routing.module';
import { VisibilityComponent } from './visibility.component';

@NgModule({
  imports: [
    CommonModule,
    VisibilityRoutingModule
  ],
  declarations: [VisibilityComponent]
})
export class VisibilityModule { }
