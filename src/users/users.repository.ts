import { User } from './users.interface';

export interface UserRepository {
  findAll(): User[];
  findOne(id: number): User | undefined;
}
