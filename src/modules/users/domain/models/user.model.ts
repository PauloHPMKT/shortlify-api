import { User } from '../entities/User';

export namespace UserModel {
  export type toCreate = Omit<User, '_id' | 'createdAt' | 'avatar'>;
}
