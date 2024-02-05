import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './../module/decorator/public-access.decorator';
import { SignupApi } from '../controller/api/signup.api';
import { UserMapper } from '../controller/mapper/user.mapper';
import { UserService } from '../service/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userMapper: UserMapper,
    private userService: UserService,
  ) {}

  @Public()
  @Post('/login')
  signIn(@Body() signIn: Record<string, any>) {
    return this.authService.signIn(signIn.email, signIn.password);
  }

  @Public()
  @Post('/signup')
  signUp(@Body() toCreate: SignupApi) {
    let user = this.userMapper.signupApiToDomain(toCreate);
    let userToRest = this.userService.saveUser(user);
    return this.userMapper.toRest(userToRest);
  }
}
