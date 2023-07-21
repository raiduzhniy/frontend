import { AppStateInterface } from '@core/types/app-state.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state.contacts;

export const selectIsLoadingContacts = createSelector(
  selectFeature,
  state => state.isLoading
);

export const selectContacts = createSelector(
  selectFeature,
  state => state.contacts
);

export const selectContactsError = createSelector(
  selectFeature,
  state => state.error
);
