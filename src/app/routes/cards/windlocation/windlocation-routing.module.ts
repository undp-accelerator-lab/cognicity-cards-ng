import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindlocationComponent } from './windlocation.component';

const routes: Routes = [
  { path: '', component: WindlocationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindlocationRoutingModule { }
