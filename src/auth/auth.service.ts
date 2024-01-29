import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    // TODO: Generate jwt return it here

    return user;
  }
}
