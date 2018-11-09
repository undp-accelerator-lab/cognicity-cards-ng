import { Injectable, NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Routes,
  Router,
  RouterModule,
  // RouterStateSnapshot
} from '@angular/router';

import { environment as env } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { DeckComponent } from './deck.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): boolean {
    const otl = next.params.otl;

    if (this.authService.checkOTL(env['stage'], otl)) {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    }
  }
}

const routes: Routes = [
  {
    path: '',
    component: DeckComponent,
    children: env.supportedDecks,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckRoutingModule { }
