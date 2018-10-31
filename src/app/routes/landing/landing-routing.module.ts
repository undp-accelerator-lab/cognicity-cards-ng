import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { environment as env } from '../../../environments/environment';
import { LandingComponent } from './landing.component';

// const getCardDecks = () => {
//   const children = [];
//
//   for (const deck of env.supportedDecks) {
//     children.push(
//       { path: deck, loadChildren:
//         '../decks/' + deck + '/' + deck + '.module#'
//         + deck.charAt(0).toUpperCase() + deck.substr(1) + 'Module'
//       }
//     )
//   }
//
//   return children;
// };

// console.log(getCardDecks());

const routes: Routes = [
  // REVIEW: this doesn't work ??
  // { path: '', component: LandingComponent, children: getCardDecks()}

  // While this works, race condition??
  { path: '', component: LandingComponent, children: [
    { path: 'flood', loadChildren: '../decks/flood/flood.module#FloodModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
