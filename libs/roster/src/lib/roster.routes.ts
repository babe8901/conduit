import { Route } from '@angular/router';
import { RosterComponent } from './roster.component';
import {authGuard} from '@realworld/auth/data-access'

export const ROSTER_ROUTES: Route[] = [
  {
    path: '',
    component: RosterComponent,
    canActivate: [authGuard],
  },
];
