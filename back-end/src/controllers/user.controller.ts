// src/controllers/user.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { GroceryService } from '../services/grocery.service';
import { GroceryDto } from '../dtos/create-grocery.dto';

@Controller('user')
export class UserController {
  constructor(private readonly groceryService: GroceryService) {}

  @Post('/book-groceries')
  bookGroceries(@Body() bookGroceryDto: GroceryDto) {
    return this.groceryService.bookItems(bookGroceryDto);
  }

  @Get('/grocery-list')
  getGroceryList() {
    return this.groceryService.findAll();
  }
}
