import { inject, Injectable } from '@angular/core';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NewsService } from '@shared/services';
import * as NewsActions from './news.actions';
import { selectNewsQueryParams } from './news.selector';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';

@Injectable()
export class NewsEffects {
  private newsService = inject(NewsService);
  private actions$ = inject(Actions);
  private store: Store<AppStateInterface> = inject(Store);

  getNewsElements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.getNewsElements),
      mergeMap(({ queryParams }) => {
        return this.newsService.getNewsElements(queryParams).pipe(
          map(response => NewsActions.getNewsElementsSuccess({ response })),
          catchError(error =>
            of(NewsActions.getNewsElementsFailure({ error: error.message }))
          )
        );
      })
    );
  });

  deleteNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.deleteNews),
      mergeMap(({ newsId }) => {
        return this.newsService.deleteNews(newsId).pipe(
          withLatestFrom(this.store.select(selectNewsQueryParams)),
          map(([_, queryParams]) =>
            NewsActions.getNewsElements({ queryParams })
          )
        );
      })
    );
  });
}
