import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStatsState } from './user-stats.feature';

export const selectUserStatsState = createFeatureSelector<UserStatsState>('userStats');

export const selectUserStats = createSelector(
  selectUserStatsState,
  (state: UserStatsState) => state.stats
);

export const selectUserStatsLoading = createSelector(
  selectUserStatsState,
  (state: UserStatsState) => state.loading
);

export const selectUserStatsError = createSelector(
  selectUserStatsState,
  (state: UserStatsState) => state.error
);
