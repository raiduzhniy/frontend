import { Injectable } from '@angular/core';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Store } from '@ngrx/store';
import { TableQueryParams } from '@shared/interfaces';
import {
  createNews,
  deleteNews,
  getNews,
  getNewsElements,
  editNews,
  resetNewsState,
} from './news.actions';
import {
  selectIsLoadingNews,
  selectIsLoadingNewsElements,
  selectNews,
  selectNewsElements,
  selectNewsElementsError,
} from './news.selector';

@Injectable()
export class NewsFacade {
  isLoadingNews$ = this.store.select(selectIsLoadingNews);
  news$ = this.store.select(selectNews);
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

  dispatchCreateNews(formData: FormData): void {
    this.store.dispatch(createNews({ dto: formData }));
  }

  dispatchUpdateNews(id: string, formData: FormData): void {
    this.store.dispatch(editNews({ id, dto: formData }));
  }

  dispatchGetNews(id: string): void {
    this.store.dispatch(getNews({ id }));
  }

  dispatchResetState(): void {
    this.store.dispatch(resetNewsState());
  }
}
