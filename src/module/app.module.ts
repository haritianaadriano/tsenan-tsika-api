import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../model/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Product],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
