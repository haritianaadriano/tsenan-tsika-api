import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../model/product.entity';
import { Repository } from 'typeorm';
import { toBase64 } from './utils/file.parser';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  saveAll(toSave: Product[]): Promise<Product[]> {
    return this.productRepository.save(toSave);
  }

  getOneById(id: string): Promise<Product | null> {
    return this.productRepository.findOneById(id);
  }

  async uploadProductImage(id: string, picture: string): Promise<Product | null> {
    let result = await this.getOneById(id);
    result.setPicture(picture);
    return this.productRepository.save(result);
  }
}
