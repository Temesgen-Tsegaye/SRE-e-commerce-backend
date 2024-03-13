import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Customer } from './customer.entrity';


@Injectable()
export class CustomersService {
  constructor(@InjectRepository(Customer) private repo: Repository<Customer>) {}

  async create(user_name: string, phone_number: string,password:string) {

      
    

    const saltRound=10
    const salt = await bcrypt.genSalt(saltRound);
    const passwordHashed= await bcrypt.hash(password, salt);
    const customer = this.repo.create({ user_name,phone_number, password:passwordHashed });

    return this.repo.save(customer);
    

   
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }


  findByUserName(user_name: string) {
    return this.repo.find({ where: { user_name } });
  }

  findByPhoneNumber(phone_number: string) {
    return this.repo.find({ where: { phone_number  } });
  }
  

  async update(id: number, attrs: Partial<Customer>) {
    const customer = await this.findOne(id);
    if (!customer) {
      throw new NotFoundException('user not found');
    }
    Object.assign(customer, attrs);
    return this.repo.save(customer);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }
}
