import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { WindComponent } from './wind.component';

const routes: Routes = [
  {
    path: '',
    component: WindComponent,
    children: env['supportedCards']['wind']
  },
  // Optional, redirectTo first card in wind
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
export class WindRoutingModule { }
