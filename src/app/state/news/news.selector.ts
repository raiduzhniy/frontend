import { AppStateInterface } from '@core/types/app-state.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state.news;

export const selectIsLoadingNewsElements = createSelector(
  selectFeature,
  state => state.isLoadingNewsElements
);

export const selectNewsElements = createSelector(
  selectFeature,
  state => state.newsElements
);

export const selectNewsElementsError = createSelector(
  selectFeature,
  state => state.errorNewsElements
);

export const selectNewsQueryParams = createSelector(
  selectFeature,
  state => state.queryParams
);
