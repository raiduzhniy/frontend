import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { HtmlsServiceBase } from '@shared/abstract-classes';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends HtmlsServiceBase {
  protected readonly url: string = 'contacts';

  constructor(apiService: ApiService) {
    super(apiService);
  }
}
