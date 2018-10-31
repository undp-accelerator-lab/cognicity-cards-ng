import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { FloodComponent } from './routes/decks/flood/flood.component';
// import { LocationComponent } from './routes/cards/location/location.component';

import { ErrorComponent } from './routes/error/error.component';
import { ThanksComponent } from './routes/thanks/thanks.component';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '**', component: ErrorComponent, data: {error: 'pageNotFound'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', enableTracing: false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
