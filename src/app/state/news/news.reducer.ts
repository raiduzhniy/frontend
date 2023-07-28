import { createReducer, on } from '@ngrx/store';
import { NewsStateInterface } from '@state/news/news-state.interface';
import * as NewsActions from './news.actions';

export const initialState: NewsStateInterface = {
  queryParams: null,
  isLoadingNewsElements: false,
  newsElements: null,
  errorNewsElements: '',
  isLoadingNews: false,
  news: null,
  errorNews: '',
};

export const newsReducer = createReducer<NewsStateInterface>(
  initialState,
  on(NewsActions.getNewsElements, (state, action) => ({
    ...state,
    isLoadingNewsElements: true,
    queryParams: action.queryParams,
  })),
  on(NewsActions.getNewsElementsSuccess, (state, action) => ({
    ...state,
    isLoadingNewsElements: false,
    newsElements: action.response,
  })),
  on(NewsActions.getNewsElementsFailure, (state, action) => ({
    ...state,
    isLoadingNewsElements: false,
    errorNewsElements: action.error,
  })),
  on(NewsActions.deleteNews, state => ({
    ...state,
    isLoadingNewsElements: true,
  }))
);
