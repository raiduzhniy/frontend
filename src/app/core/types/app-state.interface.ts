import { AuthStateInterface } from '../state/auth/auth-state.interface';

export interface AppStateInterface {
  user: AuthStateInterface;
}
