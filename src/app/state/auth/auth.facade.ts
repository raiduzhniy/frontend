import { Injectable } from '@angular/core';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Store } from '@ngrx/store';
import { LoginDto } from '@shared/interfaces';
import * as AuthActions from '@state/auth/auth.actions';
import {
  selectIsLoadingUser,
  selectUser,
  selectUserError,
} from '@state/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  isLoading$ = this.store.select(selectIsLoadingUser);
  error$ = this.store.select(selectUserError);
  user$ = this.store.select(selectUser);

  constructor(private store: Store<AppStateInterface>) {}

  dispatchLogin(loginDto: LoginDto): void {
    this.store.dispatch(AuthActions.login({ loginDto }));
  }

  dispatchLogout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  dispatchGetUser(): void {
    this.store.dispatch(AuthActions.getUser());
  }

  dispatchGetUserFailure(): void {
    this.store.dispatch(AuthActions.getUserFailure());
  }
}
