import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);

  const token = cookieService.get('token');

  const update = token
    ? {
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      }
    : {};

  const authReq = req.clone(update);

  return next(authReq);
};
