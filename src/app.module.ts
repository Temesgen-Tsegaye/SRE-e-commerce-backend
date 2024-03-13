import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/customer.entrity';
import { AuthModule } from './auth/auth.module';
import { CustomerServiceModule } from './customer-service/customer-service.module';
import { CustomerServiceModule } from './customer-service/customer-service.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'e-commerce',
      entities: [Customer],
      synchronize: true,
    }),
    CustomersModule,
    AuthModule,
    CustomerServiceModule,
  ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
