import { News, TableData, TableQueryParams } from '@shared/interfaces';

export interface NewsStateInterface {
  queryParams: TableQueryParams;
  isLoadingNewsElements: boolean;
  newsElements: TableData<News> | null;
  errorNewsElements: string;
  isLoadingNews: boolean;
  news: News | null;
  errorNews: string;
}
