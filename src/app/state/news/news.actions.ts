import { createAction, props } from '@ngrx/store';
import { News, TableData, TableQueryParams } from '@shared/interfaces';

const IDENTIFIER = 'News';

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
