import { Observable } from 'rxjs';
import { ApiService } from '@core/services';
import { Html } from '../interfaces';

export abstract class HtmlsServiceBase {
  protected abstract readonly url: string;
  protected constructor(protected apiService: ApiService) {}

  getHtml(): Observable<Html> {
    return this.apiService.get(`${this.url}`);
  }

  updateHtml(updatedHtml: Html): Observable<Html> {
    return this.apiService.put(`${this.url}/edit`, updatedHtml);
  }
}
