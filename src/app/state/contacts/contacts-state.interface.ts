import { Html } from '@shared/interfaces';

export interface ContactsStateInterface {
  isLoading: boolean;
  contacts: Html | null;
  error: string | null;
}
