import { AuthUser } from './auth.interface';

export interface AuthStorage {
  user: AuthUser;
  token: string;
}
