import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiredistanceComponent } from './firedistance.component';

const routes: Routes = [
  { path: '', component: FiredistanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiredistanceRoutingModule { }
