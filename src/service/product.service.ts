import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/model/product.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    getAll(): Promise<Product[]> {
        return this.productRepository.find();
    }

    getOneById(id: string): Promise<Product | null> {
        return this.productRepository.findOneById(id);
    }
}