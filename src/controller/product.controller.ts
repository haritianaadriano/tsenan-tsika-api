import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { Product } from '../model/product.entity';
import { ProductService } from '../service/product.service';
import { AuthGuard } from 'src/auth/guards/auth.guards';
import { Public } from 'src/module/decorator/public-access.decorator';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put()
  crupdateProducts(@Body() toSave: Product[]): Promise<Product[]> {
    return this.productService.saveAll(toSave);
  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAll();
  }
}
