import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { UserService } from 'apps/backend/src/user/user.service';
import * as UserStatsActions from './user-stats.actions';

@Injectable()
export class UserStatsEffects {
  loadUserStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserStatsActions.loadUserStats),
      mergeMap(() =>
        from(this.userService.getUserStats()).pipe(
          map((stats) => UserStatsActions.loadUserStatsSuccess({ stats })),
          catchError((error) => of(UserStatsActions.loadUserStatsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
