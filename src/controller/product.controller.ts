import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Product } from '../model/product.entity';
import { ProductService } from '../service/product.service';
import { AuthGuard } from '../auth/guards/auth.guards';
import { RoleGuard } from '../auth/guards/role.guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { query } from 'express';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(RoleGuard)
  @Put()
  crupdateProducts(@Body() toSave: Product[]): Promise<Product[]> {
    return this.productService.saveAll(toSave);
  }

  @Get()
  getProducts(
    @Query() product_name: string | null,
    @Query() user_username: string | null,
  ): Promise<Product[]> {
    return this.productService.getProductByCriteria(
      user_username,
      product_name,
    );
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
