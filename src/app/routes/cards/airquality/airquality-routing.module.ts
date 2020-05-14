import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AirqualityComponent } from './airquality.component';

const routes: Routes = [
  { path: '', component: AirqualityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirqualityRoutingModule { }
