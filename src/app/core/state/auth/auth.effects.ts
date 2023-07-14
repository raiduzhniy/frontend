import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../../services';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ loginDto }) =>
        this.authService.login(loginDto).pipe(
          map(loginResponse => AuthActions.loginSuccess({ loginResponse })),
          catchError(({ error }) => {
            return of(AuthActions.loginFailure({ error: error.message }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
