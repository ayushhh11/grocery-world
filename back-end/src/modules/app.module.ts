// src/modules/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { GroceryModule } from './grocery.module';

@Module({
  imports: [TypeOrmModule.forRoot(), GroceryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
