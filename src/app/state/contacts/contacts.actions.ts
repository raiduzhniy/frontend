import { createAction, props } from '@ngrx/store';
import { Html } from '@shared/interfaces';

const IDENTIFIER = 'Contacts';

export const getContacts = createAction(`[${IDENTIFIER}] Get Contacts`);

export const updateContacts = createAction(
  `[${IDENTIFIER}] Update Contacts`,
  props<{ dto: Html }>()
);

export const getContactsSuccess = createAction(
  `[${IDENTIFIER}] Get Contacts Success`,
  props<{ response: Html }>()
);

export const getContactsFailure = createAction(
  `[${IDENTIFIER}] Get Contacts Failure`,
  props<{ error: string }>()
);
