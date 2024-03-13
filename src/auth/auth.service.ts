import { Injectable , BadRequestException, } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service'; 
import * as bcrypt from "bcrypt"
@Injectable()
export class AuthService {
    constructor(private customerService:CustomersService){

    }
   
    async signup(user_name:string,password:string,phone_number:string){
          const prevUserWithSameName= await this.customerService.findByUserName(user_name)
          console.log(prevUserWithSameName,'prev')
          if(prevUserWithSameName.length){
            throw new BadRequestException("User Name exist use other")
          }
        const prevusersWithSamePhoneNumber=await this.customerService.findByPhoneNumber(phone_number)
        console.log(prevusersWithSamePhoneNumber,'ph')
        if(prevusersWithSamePhoneNumber.length){
            throw new BadRequestException("Phone Number Exist")
        }
      return  await this.customerService.create(user_name,phone_number,password)
        
    }
    async signin(user_name:string,password:string){
        const customer= await this.customerService.findByUserName(user_name)

        if(!customer){
            throw new BadRequestException("User Not found")
        }
        
        const isPasswordValid = await bcrypt.compare(
            password,
            customer[0][0].password
          );

          if(!isPasswordValid){
            throw new BadRequestException("Incorect password")
          }

          return customer
        

}

}
