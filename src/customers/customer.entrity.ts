import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity()
  export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_name:string
    @Column()
    phone_number:string
    @Column()
    password:string
}
  