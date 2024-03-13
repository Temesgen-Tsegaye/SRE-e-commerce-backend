import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateCustomerDto {
  @IsEmail()
  @IsOptional()
  user_name: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  phone_number:string
}
