import { UsersService } from '@/modules/users/users.service';
import { User } from '@/modules/users/users.types';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(email: string) {
    const user = this.usersService.findOneByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  generateJwt(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
