import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from '../../landing/landing.component';
import { FloodComponent } from './flood.component';
import { LocationComponent } from '../../cards/location/location.component';

const routes: Routes = [
  { path: '', component: LandingComponent, children: [
    { path: 'flood', component: FloodComponent, children: [
      { path: 'location', component: LocationComponent },
    ] },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloodRoutingModule { }
