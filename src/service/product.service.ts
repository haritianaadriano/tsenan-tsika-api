import { Injectable } from '@nestjs/common';
import {
  InjectDataSource,
  InjectEntityManager,
  InjectRepository,
} from '@nestjs/typeorm';
import { Product } from '../model/product.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';

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

  async getProductByCriteria(authorUsername: string, productName: string) {
    const queryBuilder = this.productRepository
      .createQueryBuilder('p')
      .select([
        'p.name',
        'p.description',
        'p.price',
        'p.status',
        'p.picture',
        'p.creation_datetime',
        'p.updated_datetime',
        'p.author',
      ])
      .leftJoin('p.author', 'u');

    if (authorUsername && authorUsername.length > 0) {
      queryBuilder.andWhere('u.username LIKE :username', {
        username: `%${authorUsername}%`,
      });
    }

    if (productName && productName.length > 0) {
      queryBuilder.andWhere('p.name LIKE :product_name', {
        product_name: `%${productName}%`,
      });
    }

    return queryBuilder.getMany();
  }

  async uploadProductImage(
    id: string,
    picture: string,
  ): Promise<Product | null> {
    let result = await this.getOneById(id);
    result.setPicture(picture);
    return this.productRepository.save(result);
  }
}
