import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment as env } from '../../../../environments/environment';
import { DeckComponent } from './deck.component';

const routes: Routes = [
  {
    path: '',
    component: DeckComponent,
    children: env['supportedCards']['deck']
  },
  // Optional, redirectTo first card in deck
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
export class DeckRoutingModule { }
