import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { HazeComponent } from './haze.component';

const routes: Routes = [
  {
    path: '',
    component: HazeComponent,
    children: env['supportedCards']['haze']
  },
  // Optional, redirectTo first card in haze
  {
    path: '**',
    redirectTo: 'location',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HazeRoutingModule { }
