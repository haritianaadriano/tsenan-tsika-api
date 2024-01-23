import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/model/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    exports: [TypeOrmModule]
})

export class ProductModule {}