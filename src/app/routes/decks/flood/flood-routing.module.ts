import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloodComponent } from './flood.component';
import { LocationComponent } from '../../cards/location/location.component';

// preactivation step??

const routes: Routes = [
  { path: '', component: FloodComponent, children: [
    { path: 'location', component: LocationComponent },
    { path: '**', redirectTo: 'location' }, // Redirect to first card
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloodRoutingModule { }
