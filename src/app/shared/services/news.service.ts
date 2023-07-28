import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { News, TableData, TableQueryParams } from '@shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private apiService: ApiService) {}

  getNewsElements(queryParams?: TableQueryParams): Observable<TableData<News>> {
    const options: { [key: string]: unknown } = {};

    if (queryParams) {
      options['params'] = queryParams;
    }

    return this.apiService.get(`news`, options);
  }

  deleteNews(newsId: string): Observable<{ success: boolean }> {
    return this.apiService.delete(`news/${newsId}/delete`);
  }
}
