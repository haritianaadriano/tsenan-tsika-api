import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { jwtConstant } from '../auth/constant';
import { UserModule } from './user.module';
import { UserMapper } from 'src/controller/mapper/user.mapper';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserMapper],
})
export class AuthModule {}
