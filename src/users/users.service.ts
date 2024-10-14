import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { User } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  findAll(): User[] {
    return this.userRepository.findAll();
  }

  findOne(id: number): User | undefined {
    return this.userRepository.findOne(id);
  }
}
