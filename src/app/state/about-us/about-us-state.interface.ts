import { Html } from '@shared/interfaces';

export interface AboutUsStateInterface {
  isLoading: boolean;
  aboutUs: Html | null;
  error: string | null;
}
