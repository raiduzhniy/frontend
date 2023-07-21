import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactsService } from '@shared/services/contacts.service';
import * as ContactsActions from '@state/contacts/contacts.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ContactsEffects {
  private contactsService = inject(ContactsService);
  private actions$ = inject(Actions);

  getContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.getContacts),
      mergeMap(() => {
        return this.contactsService.getHtml().pipe(
          map(response => ContactsActions.getContactsSuccess({ response })),
          catchError(error =>
            of(ContactsActions.getContactsFailure({ error: error.message }))
          )
        );
      })
    );
  });

  updateContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.updateContacts),
      mergeMap(({ dto }) => {
        return this.contactsService.updateHtml(dto).pipe(
          map(response => ContactsActions.getContactsSuccess({ response })),
          catchError(error =>
            of(ContactsActions.getContactsFailure({ error: error.message }))
          )
        );
      })
    );
  });
}
