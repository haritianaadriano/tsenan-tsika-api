import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserRole } from './enum/user-role.enum';
import { CONFIGURABLE_MODULE_ID } from '@nestjs/common/module-utils/constants';

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
  role: UserRole;
  @Column()
  password: string;
  @Column()
  email: string;
}
