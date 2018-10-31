import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloodComponent } from './flood.component';
import { LocationComponent } from '../../cards/location/location.component';

const routes: Routes = [
  // REVIEW: cannot use lazy loading multiple times ??
  // { path: '', component: FloodComponent, children: [
  //   { path: 'location', loadChildren: '../../cards/location/location.module#LocationModule' },
  // ] }

  { path: '', component: FloodComponent, children: [
    { path: 'location', component: LocationComponent },
    { path: '**', redirectTo: 'location' },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloodRoutingModule { }
