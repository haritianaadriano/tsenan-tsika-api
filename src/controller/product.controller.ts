import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { Product } from '../model/product.entity';
import { ProductService } from '../service/product.service';
import { AuthGuard } from '../auth/guards/auth.guards';
import { RoleGuard } from '../auth/guards/role.guards';

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
}
