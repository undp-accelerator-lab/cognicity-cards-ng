import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { VolcanoComponent } from './volcano.component';

const routes: Routes = [
  {
    path: '',
    component: VolcanoComponent,
    children: env['supportedCards']['volcano']
  },
  // Optional, redirectTo first card in volcano
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
export class VolcanoRoutingModule { }
