import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { Product } from '../model/product.entity';
import { ProductService } from '../service/product.service';
import { Roles } from 'src/module/decorator/role.decorator';
import { UserRole } from 'src/model/enum/user-role.enum';
import { RolesGuard } from 'src/auth/guards/role.guards';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put()
  crupdateProducts(@Body() toSave: Product[]): Promise<Product[]> {
    return this.productService.saveAll(toSave);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAll();
  }
}
