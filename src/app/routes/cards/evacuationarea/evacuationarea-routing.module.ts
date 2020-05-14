import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvacuationareaComponent } from './evacuationarea.component';

const routes: Routes = [
  { path: '', component: EvacuationareaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationareaRoutingModule { }
