import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { aboutUsReducer } from '@state/about-us/about-us.reducer';
import { authReducer } from '@state/auth/auth.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  user: authReducer,
  aboutUs: aboutUsReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
