export enum OrderDirection {
  Acs = 'asc',
  Desc = 'desc',
}

export interface TableData<T> {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  elements: T[];
}

export interface TableQueryParams
  extends Partial<Pick<TableData<unknown>, 'pageNumber' | 'pageSize'>> {
  orderBy?: string;
  orderDirection?: OrderDirection;
}
