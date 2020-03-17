import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { EarthquakeComponent } from './earthquake.component';

const routes: Routes = [
  {
    path: '',
    component: EarthquakeComponent,
    children: env['supportedCards']['earthquake']
  },
  // Optional, redirectTo first card in earthquake
  {
    path: '**',
    redirectTo: 'type',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarthquakeRoutingModule { }
