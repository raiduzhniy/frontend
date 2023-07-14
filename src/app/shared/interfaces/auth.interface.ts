import { User } from './user.interface';

export interface LoginDto {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
