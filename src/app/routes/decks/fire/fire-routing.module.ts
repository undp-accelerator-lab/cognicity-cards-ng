import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { FireComponent } from './fire.component';

const routes: Routes = [
  {
    path: '',
    component: FireComponent,
    children: env['supportedCards']['fire']
  },
  // Optional, redirectTo first card in fire
  {
    path: '**',
    redirectTo: 'firedistance',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FireRoutingModule { }
