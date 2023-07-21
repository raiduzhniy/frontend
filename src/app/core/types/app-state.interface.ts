import { AboutUsStateInterface } from '@state/about-us/about-us-state.interface';
import { AuthStateInterface } from '@state/auth/auth-state.interface';

export interface AppStateInterface {
  user: AuthStateInterface;
  aboutUs: AboutUsStateInterface;
}
