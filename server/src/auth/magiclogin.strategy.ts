import { PassportStrategy } from '@nestjs/passport';
import Strategy from 'passport-magic-login';
import { Injectable, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class MagicLoginStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(MagicLoginStrategy.name);
  constructor(private authService: AuthService) {
    super({
      secret: process.env.MAGIC_LOGIN_SECRET,
      jwtOptions: {
        expiresIn: '5m',
      },
      callbackUrl: process.env.MAGIC_LOGIN_CALLBACK_URL,
      sendMagicLink: async (email, token) => {
        // send email
        // await sendEmail(email, token);
        this.logger.log(`Magic link sent to ${email} with token ${token} `);
      },
      verify: async (payload, callback) => {
        callback(null, await this.validate(payload));
      },
    });
  }
  async validate(payload: { destination: string }) {
    return this.authService.validateUser(payload.destination);
  }
}
