import { Injectable } from '@angular/core';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Store } from '@ngrx/store';
import { TableQueryParams } from '@shared/interfaces';
import { deleteNews, getNewsElements } from './news.actions';
import {
  selectIsLoadingNewsElements,
  selectNewsElements,
  selectNewsElementsError,
} from './news.selector';

@Injectable()
export class NewsFacade {
  newsElements$ = this.store.select(selectNewsElements);
  isLoadingNewsElements$ = this.store.select(selectIsLoadingNewsElements);
  errorNewsElements$ = this.store.select(selectNewsElementsError);

  constructor(private store: Store<AppStateInterface>) {}

  dispatchGetNewsElements(queryParams?: TableQueryParams): void {
    this.store.dispatch(getNewsElements({ queryParams }));
  }

  dispatchDeleteNews(newsId: string): void {
    this.store.dispatch(deleteNews({ newsId }));
  }
}
