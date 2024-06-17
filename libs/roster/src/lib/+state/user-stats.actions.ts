import { createAction, props } from '@ngrx/store';

export const loadUserStats = createAction('[User Stats] Load User Stats');
export const loadUserStatsSuccess = createAction(
  '[User Stats] Load User Stats Success',
  props<{ stats: any[] }>()
);
export const loadUserStatsFailure = createAction(
  '[User Stats] Load User Stats Failure',
  props<{ error: any }>()
);
