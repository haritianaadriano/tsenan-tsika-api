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
  @Column('varchar')
  roles: UserRole;
  @Column()
  password: string;
  @Column()
  email: string;
}
