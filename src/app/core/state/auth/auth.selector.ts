import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../types/app-state.interface';

export const selectFeature = (state: AppStateInterface) => state.user;

export const selectIsLoadingUser = createSelector(
  selectFeature,
  state => state.isLoading
);

export const selectUser = createSelector(selectFeature, state => state.user);

export const selectUserError = createSelector(
  selectFeature,
  state => state.error
);
