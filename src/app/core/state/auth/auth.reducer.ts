import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from './auth-state.interface';
import * as UserActions from './auth.actions';

export const initialState: AuthStateInterface = {
  isLoading: false,
  token: null,
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
      token: loginResponse.token,
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
  )
);
