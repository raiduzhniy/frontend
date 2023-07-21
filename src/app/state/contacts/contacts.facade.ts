import { Injectable } from '@angular/core';
import { AppStateInterface } from '@core/types/app-state.interface';
import { Store } from '@ngrx/store';
import { Html } from '@shared/interfaces';
import { getContacts, updateContacts } from '@state/contacts/contacts.actions';
import {
  selectContacts,
  selectIsLoadingContacts,
} from '@state/contacts/contacts.selector';

@Injectable()
export class ContactsFacade {
  contacts$ = this.store.select(selectContacts);
  isLoading$ = this.store.select(selectIsLoadingContacts);
  error$ = this.store.select(selectContacts);

  constructor(private store: Store<AppStateInterface>) {}

  dispatchGetContacts(): void {
    this.store.dispatch(getContacts());
  }

  dispatchEditContacts(dto: Html): void {
    this.store.dispatch(updateContacts({ dto }));
  }
}
