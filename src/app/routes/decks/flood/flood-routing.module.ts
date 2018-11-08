import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { FloodComponent } from './flood.component';

const routes: Routes = [
  {
    path: '',
    component: FloodComponent,
    children: env['supportedCards']['flood']
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloodRoutingModule { }
