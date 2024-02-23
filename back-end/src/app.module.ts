// src/modules/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroceryModule } from './modules/grocery.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GroceryModule,
  ],
  controllers: [AppController, GroceryModule],
  providers: [AppService],
})
export class AppModule {}