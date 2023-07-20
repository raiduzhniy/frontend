import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AboutUsService } from '@shared/services/about-us.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as AdminAboutUsActions from './about-us.actions';

@Injectable()
export class AboutUsEffects {
  private aboutUsService = inject(AboutUsService);
  private actions$ = inject(Actions);

  getAboutUs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminAboutUsActions.getAboutUs),
      mergeMap(() => {
        return this.aboutUsService.getHtml().pipe(
          map(response => AdminAboutUsActions.getAboutUsSuccess({ response })),
          catchError(error =>
            of(AdminAboutUsActions.getAboutUsFailure({ error: error.message }))
          )
        );
      })
    );
  });

  updateAboutUs$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminAboutUsActions.updateAboutUs),
      mergeMap(({ dto }) => {
        return this.aboutUsService.updateHtml(dto).pipe(
          map(response => AdminAboutUsActions.getAboutUsSuccess({ response })),
          catchError(error =>
            of(AdminAboutUsActions.getAboutUsFailure({ error: error.message }))
          )
        );
      })
    );
  });
}
