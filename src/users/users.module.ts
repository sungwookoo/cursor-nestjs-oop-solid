import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { InMemoryUserRepository } from './in-memory-users.repository';

@Module({
  providers: [
    UsersService,
    { provide: 'UserRepository', useClass: InMemoryUserRepository },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
