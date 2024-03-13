import {
  Body,
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { CustomerDto } from './dtos/customer-dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
@Controller('auth')
@Serialize(CustomerDto)
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.customerService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.customerService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateCustomerDto) {
    return this.customerService.update(parseInt(id), body);
  }
}
