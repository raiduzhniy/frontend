import { User } from '../../../shared/interfaces';

export interface AuthStateInterface {
  isLoading: boolean;
  user: User | null | undefined;
  error: string | null;
}
