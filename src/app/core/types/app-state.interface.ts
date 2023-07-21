import { AboutUsStateInterface } from '@state/about-us/about-us-state.interface';
import { AuthStateInterface } from '@state/auth/auth-state.interface';
import { ContactsStateInterface } from '@state/contacts/contacts-state.interface';

export interface AppStateInterface {
  user: AuthStateInterface;
  aboutUs: AboutUsStateInterface;
  contacts: ContactsStateInterface;
}
