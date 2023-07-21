import { inject } from '@angular/core';
import { AuthFacade } from '@state/auth';
import { CookieService } from 'ngx-cookie-service';
import { filter, Observable, take } from 'rxjs';
import { User } from '@shared/interfaces';

export const UserInitializer = (): (() => Observable<
  User | null | undefined
>) => {
  const cookieService = inject(CookieService);
  const authFacade = inject(AuthFacade);
  const token = cookieService.get('token');

  if (token) {
    authFacade.dispatchGetUser();
  } else {
    authFacade.dispatchGetUserFailure();
  }

  return () =>
    authFacade.user$.pipe(
      filter(user => user !== undefined),
      take(1)
    );
};
