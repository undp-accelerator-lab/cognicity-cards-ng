import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepComponent } from './prep.component';

const routes: Routes = [
  { path: '', component: PrepComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrepRoutingModule { }
