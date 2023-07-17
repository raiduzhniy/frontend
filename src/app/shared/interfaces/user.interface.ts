import { UserRole } from '../enums';
import { Owner } from './owner.interface';
import { Vehicle } from './vehicle.interface';

export interface User {
  login: string;
  roles: UserRole[];
  apartmentNumber?: number;
  owners?: (Owner | string)[];
  vehicles?: (Vehicle | string)[];
}
