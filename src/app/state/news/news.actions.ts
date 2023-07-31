import { createAction, props } from '@ngrx/store';
import { News, TableData, TableQueryParams } from '@shared/interfaces';

const IDENTIFIER = 'News';

export const getNews = createAction(
  `[${IDENTIFIER}] Get News`,
  props<{ id: string }>()
);

export const resetNewsState = createAction(`[${IDENTIFIER}] Reset News State`);

export const getNewsSuccess = createAction(
  `[${IDENTIFIER}] Get News Success`,
  props<{ news: News }>()
);

export const getNewsFailure = createAction(
  `[${IDENTIFIER}] Get News Failure`,
  props<{ error: string }>()
);

export const getNewsElements = createAction(
  `[${IDENTIFIER}] Get News Elements`,
  props<{ queryParams?: TableQueryParams }>()
);

export const getNewsElementsSuccess = createAction(
  `[${IDENTIFIER}] Get News Elements Success`,
  props<{ response: TableData<News> }>()
);

export const getNewsElementsFailure = createAction(
  `[${IDENTIFIER}] Get News Elements Failure`,
  props<{ error: string }>()
);

export const deleteNews = createAction(
  `[${IDENTIFIER}] Delete News`,
  props<{ newsId: string }>()
);

export const createNews = createAction(
  `[${IDENTIFIER}] Create News`,
  props<{ dto: FormData }>()
);

export const createNewsSuccess = createAction(
  `[${IDENTIFIER}] Create News Success`,
  props<{ news: News }>()
);

export const createNewsFailure = createAction(
  `[${IDENTIFIER}] Create News Failure`
);

export const editNews = createAction(
  `[${IDENTIFIER}] Edit News`,
  props<{ id: string; dto: FormData }>()
);

export const editNewsSuccess = createAction(
  `[${IDENTIFIER}] Edit News Success`,
  props<{ news: News }>()
);

export const editeNewsFailure = createAction(
  `[${IDENTIFIER}] Edit News Failure`
);
