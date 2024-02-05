import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Product } from '../model/product.entity';
import { ProductService } from '../service/product.service';
import { AuthGuard } from '../auth/guards/auth.guards';
import { RoleGuard } from '../auth/guards/role.guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { readFileSync } from 'fs';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(RoleGuard)
  @Put()
  crupdateProducts(@Body() toSave: Product[]): Promise<Product[]> {
    return this.productService.saveAll(toSave);
  }

  @UseGuards(AuthGuard)
  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Post('/:id/picture/raw')
  @UseInterceptors(FileInterceptor('file'))
  async uploadProductPicture(
    @Param() productId: string,
    @UploadedFile() file: any,
  ): Promise<Product> {
    let fileToBase64 = file.buffer.toString('base64');
    return this.productService.uploadProductImage(productId, fileToBase64);
  }
}
