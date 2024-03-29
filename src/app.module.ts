import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './model/product.entity';
import { ProductModule } from './module/product.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './module/auth.module';
import { User } from './model/user.entity';
import { UserModule } from './module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Product, User],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
