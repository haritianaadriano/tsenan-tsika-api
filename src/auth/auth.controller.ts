import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './../module/decorator/public-access.decorator';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  signIn(@Body() signIn: Record<string, any>) {
    return this.authService.signIn(signIn.email, signIn.password);
  }
}
