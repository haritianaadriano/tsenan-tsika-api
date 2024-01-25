import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ProductStatus } from './enum/product-status.enum';

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column('text')
  status: ProductStatus;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  creationDatetime: Date;
  @Column()
  updatedDatetime: Date;
}
