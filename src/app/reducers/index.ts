import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { aboutUsReducer } from '@state/about-us/about-us.reducer';
import { authReducer } from '@state/auth/auth.reducer';
import { contactsReducer } from '@state/contacts/contacts.reducer';
import { newsReducer } from '@state/news/news.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  user: authReducer,
  aboutUs: aboutUsReducer,
  contacts: contactsReducer,
  news: newsReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
