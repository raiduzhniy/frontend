import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { HtmlsServiceBase } from '@shared/abstract-classes';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService extends HtmlsServiceBase {
  protected readonly url: string = 'about-us';

  constructor(apiService: ApiService) {
    super(apiService);
  }
}
