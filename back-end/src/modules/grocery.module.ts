// src/modules/grocery.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grocery } from '../entities/grocery.entity';
import { GroceryService } from '../services/grocery.service';
import { AdminController } from '../controllers/admin.controller';
import { UserController } from '../controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Grocery])],
  providers: [GroceryService],
  controllers: [AdminController, UserController],
})
export class GroceryModule {}
