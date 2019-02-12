import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EqtypeComponent } from './eqtype.component';

const routes: Routes = [
  { path: '', component: EqtypeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqtypeRoutingModule { }
