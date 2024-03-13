import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CustomersModule } from 'src/customers/customers.module';
import { AuthGuard } from './gurad/auth.gurd';
@Module({
  imports:[ JwtModule.register({
    global: true,
    secret: 'KeyKey',
    signOptions: { expiresIn: '6000s' },
  }),CustomersModule],
  controllers: [AuthController],
  providers: [AuthService,{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },]
})
export class AuthModule {}
