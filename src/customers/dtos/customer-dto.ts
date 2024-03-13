import { Expose } from 'class-transformer';

export class CustomerDto {
  @Expose()
  id: number;

  @Expose()
  phone_number: string;
  @Expose()
  user_name:string
}
