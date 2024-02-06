import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ProductStatus } from './enum/product-status.enum';

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column({type: 'varchar', nullable: true})
  status: ProductStatus;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column({ nullable: true, type: 'text' })
  picture: string;
  @Column({ nullable: true })
  creationDatetime: Date;
  @Column({ nullable: true })
  updatedDatetime: Date;

  setPicture(picture: string) {
    this.picture = picture;
  }
}
