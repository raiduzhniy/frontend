import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, LOCALE_ID } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { provideRouter } from '@angular/router';
import { ContactsEffects } from '@state/contacts/contacts.effects';
import { NewsEffects } from '@state/news/news.effects';
import { environment } from '../environments/environment';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { MyErrorStateMatcher } from '@core/classes';
import { UserInitializer } from '@core/initializers/user.initializer';
import { AuthInterceptor } from '@core/interceptors';
import { AboutUsEffects } from '@state/about-us/about-us.effects';
import { AuthEffects } from '@state/auth/auth.effects';
import { reducers, metaReducers } from './reducers';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import ukLocale from '@angular/common/locales/uk';

registerLocaleData(ukLocale);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideStore(reducers, { metaReducers }),
    provideEffects(AuthEffects, AboutUsEffects, ContactsEffects, NewsEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    { provide: ErrorStateMatcher, useClass: MyErrorStateMatcher },
    { provide: LOCALE_ID, useValue: 'uk' },
    {
      provide: APP_INITIALIZER,
      useFactory: UserInitializer,
      multi: true,
    },
  ],
};
