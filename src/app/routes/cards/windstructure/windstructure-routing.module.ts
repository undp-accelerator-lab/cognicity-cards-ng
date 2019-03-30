import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindstructureComponent } from './windstructure.component';

const routes: Routes = [
  { path: '', component: WindstructureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindstructureRoutingModule { }
