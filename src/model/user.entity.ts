import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ nullable: true })
  username: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({ default: false, name: 'is_admin' })
  isAdmin: boolean;
  @Column()
  password: string;
  @Column()
  email: string;
  @OneToMany(() => Product, (product) => product.author)
  products: Product[];

  constructor() {}

  setUsername(username: string) {
    this.username = username;
  }
  setFirstname(firstname: string) {
    this.firstname = firstname;
  }
  setLastname(lastname: string) {
    this.lastname = lastname;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setPassword(password: string) {
    this.password = password;
  }
}
