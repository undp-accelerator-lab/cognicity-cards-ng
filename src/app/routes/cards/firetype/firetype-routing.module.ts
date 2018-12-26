import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiretypeComponent } from './firetype.component';

const routes: Routes = [
  { path: '', component: FiretypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiretypeRoutingModule { }
