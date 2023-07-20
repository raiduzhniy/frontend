import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { AuthService } from '@core/services';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  cookieService = inject(CookieService);

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.getUser),
      mergeMap(() =>
        this.authService.getUser().pipe(
          map(user => AuthActions.getUserSuccess({ user })),
          catchError(() => of(AuthActions.getUserFailure()))
        )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ loginDto }) =>
        this.authService.login(loginDto).pipe(
          map(loginResponse => AuthActions.loginSuccess({ loginResponse })),
          tap(({ loginResponse }) =>
            this.cookieService.set('token', loginResponse.token, { expires: 7 })
          ),
          catchError(({ error }) => {
            return of(AuthActions.loginFailure({ error: error.message }));
          })
        )
      )
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.cookieService.delete('token');
          this.router.navigate(['']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
