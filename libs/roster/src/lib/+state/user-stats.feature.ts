import { createFeature, createReducer, on } from '@ngrx/store';
import * as UserStatsActions from './user-stats.actions';

export interface UserStatsState {
  stats: any[];
  loading: boolean;
  error: any;
}

export const initialState: UserStatsState = {
  stats: [],
  loading: false,
  error: null,
};

export const userStatsReducer = createReducer(
  initialState,
  on(UserStatsActions.loadUserStats, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserStatsActions.loadUserStatsSuccess, (state, { stats }) => ({
    ...state,
    stats,
    loading: false,
  })),
  on(UserStatsActions.loadUserStatsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const userStatsFeature = createFeature({
  name: 'userStats',
  reducer: userStatsReducer,
});
