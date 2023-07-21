import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { aboutUsReducer } from '@state/about-us/about-us.reducer';
import { authReducer } from '@state/auth/auth.reducer';
import { contactsReducer } from '@state/contacts/contacts.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  user: authReducer,
  aboutUs: aboutUsReducer,
  contacts: contactsReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
