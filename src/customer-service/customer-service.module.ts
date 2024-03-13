import { Module } from '@nestjs/common';
import { CustomerServiceController } from './customer-service.controller';
import { CustomerServiceService } from './customer-service.service';

@Module({
  controllers: [CustomerServiceController],
  providers: [CustomerServiceService]
})
export class CustomerServiceModule {}
