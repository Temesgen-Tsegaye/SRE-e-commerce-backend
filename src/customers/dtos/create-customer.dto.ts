import {IsString} from 'class-validator';

export class CreateCustomerDto {

  @IsString()
  password: string;
  @IsString()
  user_name:string;
  @IsString()
  phone_number:string
}
