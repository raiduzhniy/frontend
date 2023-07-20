import { AppStateInterface } from '@core/types/app-state.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state.aboutUs;

export const selectIsLoadingAboutUs = createSelector(
  selectFeature,
  state => state.isLoading
);

export const selectAboutUs = createSelector(
  selectFeature,
  state => state.aboutUs
);

export const selectAboutUsError = createSelector(
  selectFeature,
  state => state.error
);
