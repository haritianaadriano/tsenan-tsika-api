import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ nullable: true })
  username: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({ default: false })
  isAdmin: boolean;
  @Column()
  password: string;
  @Column()
  email: string;

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
