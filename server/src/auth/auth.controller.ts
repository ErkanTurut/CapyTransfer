import {
  Controller,
  Post,
  Get,
  Req,
  Res,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magiclogin.strategy';
import { LoginDto } from './login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private strategy: MagicLoginStrategy,
  ) {}

  //Post request to /auth/login
  @Post('login')
  login(@Req() req, @Res() res, @Body(new ValidationPipe()) body: LoginDto) {
    this.authService.validateUser(body.destination);
    console.log(res);
    return this.strategy.send(req, res);
  }

  //Get request to /auth/callback
  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback')
  callback(@Req() req) {
    return this.authService.generateJwt(req.user);
  }
}
