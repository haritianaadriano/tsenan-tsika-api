import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/model/product.entity";
import { ProductService } from "src/service/product.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [ProductService]
})

export class ProductModule {}