import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { Product } from '../model/product.entity';
import { ProductService } from '../service/product.service';

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
