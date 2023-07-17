import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { filter, Observable, take } from 'rxjs';
import { User } from '../../shared/interfaces';
import * as AuthActions from '../state/auth/auth.actions';
import { selectUser } from '../state/auth/auth.selector';
import { AppStateInterface } from '../types/app-state.interface';

export const UserInitializer = (
  store: Store<AppStateInterface>
): (() => Observable<User | null | undefined>) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('token');
  const user$ = store.select(selectUser);

  if (token) {
    store.dispatch(AuthActions.getUser());
  } else {
    store.dispatch(AuthActions.getUserFailure());
  }

  return () =>
    user$.pipe(
      filter(user => user !== undefined),
      take(1)
    );
};
