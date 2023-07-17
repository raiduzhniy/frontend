import { createAction, props } from '@ngrx/store';
import { LoginDto, LoginResponse, User } from '../../../shared/interfaces';

export const login = createAction(
  '[User] Login',
  props<{ loginDto: LoginDto }>()
);

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ loginResponse: LoginResponse }>()
);

export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ error: string }>()
);

export const getUser = createAction('[User] Get User');

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{ user: User }>()
);

export const getUserFailure = createAction('[User] Get User Failure');

export const logout = createAction('[User] Logout');
