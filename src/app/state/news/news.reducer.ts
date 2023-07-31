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
  on(NewsActions.getNews, state => ({
    ...state,
    isLoadingNews: true,
  })),
  on(NewsActions.getNewsSuccess, (state, action) => ({
    ...state,
    isLoadingNews: false,
    news: action.news,
  })),
  on(NewsActions.getNewsFailure, (state, action) => ({
    ...state,
    isLoadingNews: false,
    errorNews: action.error,
  })),
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
  })),
  on(NewsActions.createNews, state => ({
    ...state,
    isLoadingNews: true,
  })),
  on(NewsActions.createNewsSuccess, state => ({
    ...state,
    isLoadingNews: false,
  })),
  on(NewsActions.createNewsFailure, state => ({
    ...state,
    isLoadingNews: false,
  })),
  on(NewsActions.editNews, state => ({
    ...state,
    isLoadingNews: true,
  })),
  on(NewsActions.editNewsSuccess, state => ({
    ...state,
    isLoadingNews: false,
  })),
  on(NewsActions.editeNewsFailure, state => ({
    ...state,
    isLoadingNews: false,
  })),
  on(NewsActions.resetNewsState, () => initialState)
);
