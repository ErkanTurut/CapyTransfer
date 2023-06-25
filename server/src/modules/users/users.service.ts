import { Injectable } from '@nestjs/common';
import { User } from './users.types';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Bonny',
      email: 'bonny@email.com',
    },
    {
      id: '2',
      name: 'Clyde',
      email: 'clyde@email.com',
    },
  ];

  findOneByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
