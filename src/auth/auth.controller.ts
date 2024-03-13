import { Controller,Post,Body} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import  {CustomerDto} from 'src/customers/dtos/customer-dto'
import { Public } from './gurad/escape.auth';
@Controller('auth')
@Serialize(CustomerDto)
export class AuthController {
    constructor( private authService:AuthService,private jwtService:JwtService){

    }
   
    @Public()
    @Post('/signup')
   async signup(@Body() body:CreateCustomerDto){

        const user=await this.authService.signup(body.user_name,body.password,body.phone_number)
        const payload = { sub: user.id, username: user.user_name };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
        
    }
  
    @Post('/signin')
    async signin(@Body() body:Partial<CreateCustomerDto>){
           const user=await this.authService.signin(body.user_name,body.password)
          
           return {
            access_token: await this.jwtService.signAsync(user),
          };

    }

    
   
}
