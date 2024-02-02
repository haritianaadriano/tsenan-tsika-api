import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserRole } from './enum/user-role.enum';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  isAdmin: boolean;
  @Column()
  password: string;
  @Column()
  email: string;
}
