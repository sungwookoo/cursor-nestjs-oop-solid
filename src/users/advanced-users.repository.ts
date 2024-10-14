import { Injectable } from '@nestjs/common';
import { InMemoryUserRepository } from './in-memory-users.repository';
import { User } from './users.interface';

@Injectable()
export class AdvancedUserRepository extends InMemoryUserRepository {
  findByName(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }
}
