import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { User } from './users.interface';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  protected users: User[] = [{ id: 1, name: 'John Doe' }];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
