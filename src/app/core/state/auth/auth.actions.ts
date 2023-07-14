import { createAction, props } from '@ngrx/store';
import { LoginDto, LoginResponse } from '../../../shared/interfaces';

export const login = createAction(
  '[User] Get User',
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
