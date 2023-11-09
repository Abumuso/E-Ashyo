import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { Admin } from './admin/models/admin.model';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';

import { OtpModule } from './otp/otp.module';
import { Otp } from './otp/models/otp.model';
import { User } from './user/models/user.model';


import { SessionModule } from './session/session.module';
import { SessionItemsModule } from './session_items/session_items.module';
import { CartModule } from './cart/cart.module';


import { ProductModule } from './product/product.module';
import { Product } from './product/models/product.model';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    JwtModule.register({
      global: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      logging: false,

      models: [Admin, Otp, User],

      models: [Admin, Product],

    }),
    AdminModule,
    CategoryModule,
    UserModule,

    OtpModule,


    SessionModule,
    SessionItemsModule,
    CartModule,


    ProductModule,


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
