import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepthComponent } from './depth.component';

const routes: Routes = [
  { path: '', component: DepthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepthRoutingModule { }
