import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvacuationnumberComponent } from './evacuationnumber.component';

const routes: Routes = [
  { path: '', component: EvacuationnumberComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationnumberRoutingModule { }
