import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from './auth-state.interface';
import * as UserActions from './auth.actions';

export const initialState: AuthStateInterface = {
  isLoading: false,
  user: undefined,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    UserActions.login,
    (state): AuthStateInterface => ({ ...state, isLoading: true })
  ),
  on(
    UserActions.loginSuccess,
    (state, { loginResponse }): AuthStateInterface => ({
      ...state,
      isLoading: false,
      error: null,
      user: loginResponse.user,
    })
  ),
  on(
    UserActions.loginFailure,
    (state, { error }): AuthStateInterface => ({
      ...state,
      isLoading: false,
      error,
    })
  ),
  on(UserActions.getUser, state => ({
    ...state,
    isLoading: true,
  })),
  on(UserActions.getUserSuccess, (state, { user }) => ({ ...state, user })),
  on(UserActions.getUserFailure, state => ({
    ...state,
    user: null,
    isLoading: false,
  })),
  on(UserActions.logout, state => ({ ...state, user: null }))
);
