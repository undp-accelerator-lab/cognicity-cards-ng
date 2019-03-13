import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EqlocationComponent } from './eqlocation.component';

const routes: Routes = [
  { path: '', component: EqlocationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqlocationRoutingModule { }
