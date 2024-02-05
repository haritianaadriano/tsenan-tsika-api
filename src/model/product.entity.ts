import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ProductStatus } from './enum/product-status.enum';
import { User } from './user.entity';

@Entity()
export class Product {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column({ type: 'varchar', nullable: true })
  status: ProductStatus;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column({ nullable: true, type: 'text' })
  picture: string;
  @Column({ nullable: true, name: 'creation_datetime' })
  creationDatetime: Date;
  @Column({ nullable: true, name: 'updated_datetime' })
  updatedDatetime: Date;
  @ManyToOne(() => User, (user) => user.products)
  author: User;

  setPicture(picture: string) {
    this.picture = picture;
  }
}
