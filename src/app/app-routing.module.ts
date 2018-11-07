import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './routes/error/error.component';
import { ThanksComponent } from './routes/thanks/thanks.component';

import { environment as env } from '../environments/environment';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'thanks', component: ThanksComponent },
  {
    path: ':otl',
    loadChildren: './routes/decks/deck.module#DeckModule',
    data: {decks: env.supportedDecks}
  },
  { path: '**', component: ErrorComponent, data: {error: 'pageNotFound'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    enableTracing: false,
    // TODO: try preloading
    // Use custom preload strategy, check with environment - supported card decks?
    // https://angular.io/guide/router#custom-preloading-strategy
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
