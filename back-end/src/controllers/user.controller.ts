// src/controllers/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { GroceryService } from '../services/grocery.service';
import { BookGroceryDto } from '../dto/book-grocery.dto';

@Controller('user')
export class UserController {
  constructor(private readonly groceryService: GroceryService) {}

  @Post('book-groceries')
  bookGroceries(@Body() bookGroceryDto: BookGroceryDto) {
    return this.groceryService.bookItems(bookGroceryDto);
  }

  @Get('grocery-list')
  getGroceryList() {
    return this.groceryService.findAll();
  }
}
