import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiretypeRoutingModule } from './firetype-routing.module';
import { FiretypeComponent } from './firetype.component';

@NgModule({
  imports: [
    CommonModule,
    FiretypeRoutingModule
  ],
  declarations: [FiretypeComponent]
})
export class FiretypeModule { }
