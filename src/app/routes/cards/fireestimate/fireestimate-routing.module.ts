import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FireestimateComponent } from './fireestimate.component';

const routes: Routes = [
  { path: '', component: FireestimateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FireestimateRoutingModule { }
