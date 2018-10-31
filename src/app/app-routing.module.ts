import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './routes/error/error.component';
import { ThanksComponent } from './routes/thanks/thanks.component';

const routes: Routes = [
  { path: '', loadChildren: './routes/landing/landing.module#LandingModule' },
  { path: 'error', component: ErrorComponent },
  { path: 'thanks', component: ThanksComponent },
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
