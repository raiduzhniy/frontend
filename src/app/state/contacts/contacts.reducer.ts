import { createReducer, on } from '@ngrx/store';
import * as ContactsActions from './contacts.actions';
import { ContactsStateInterface } from '@state/contacts/contacts-state.interface';

export const initialState: ContactsStateInterface = {
  isLoading: false,
  contacts: null,
  error: null,
};

export const contactsReducer = createReducer(
  initialState,
  on(ContactsActions.getContacts, state => ({
    ...state,
    isLoading: true,
  })),
  on(ContactsActions.updateContacts, state => ({
    ...state,
    isLoading: true,
  })),
  on(ContactsActions.getContactsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    contacts: action.response,
  })),
  on(ContactsActions.getContactsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
