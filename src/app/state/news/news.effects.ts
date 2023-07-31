import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NewsService } from '@shared/services';
import * as NewsActions from './news.actions';
import { selectNewsQueryParams } from './news.selector';
import { catchError, map, mergeMap, of, tap, withLatestFrom } from 'rxjs';

@Injectable()
export class NewsEffects {
  private newsService = inject(NewsService);
  private actions$ = inject(Actions);
  private store: Store<AppStateInterface> = inject(Store);
  private router = inject(Router);

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

  createNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.createNews),
      mergeMap(({ dto }) => {
        return this.newsService.createNews(dto).pipe(
          map(news => NewsActions.createNewsSuccess({ news })),
          tap(action => this.router.navigate(['/news', action.news.id])),
          catchError(() => of(NewsActions.createNewsFailure()))
        );
      })
    );
  });

  editNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.editNews),
      mergeMap(({ dto, id }) => {
        return this.newsService.editNews(id, dto).pipe(
          map(news => NewsActions.editNewsSuccess({ news })),
          tap(action => this.router.navigate(['/news', action.news.id])),
          catchError(() => of(NewsActions.editeNewsFailure()))
        );
      })
    );
  });

  getNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NewsActions.getNews),
      mergeMap(({ id }) =>
        this.newsService.getNews(id).pipe(
          map(news => NewsActions.getNewsSuccess({ news })),
          catchError(error =>
            of(NewsActions.getNewsFailure({ error: error.message }))
          )
        )
      )
    );
  });
}
