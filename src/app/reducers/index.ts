import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authReducer } from '../core/state/auth/auth.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  user: authReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
