// src/controllers/admin.controller.ts
import { Body, Controller, Post, Get, Patch, Param, Delete } from '@nestjs/common';
import { GroceryService } from '../services/grocery.service';
import { CreateGroceryDto } from '../dto/create-grocery.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly groceryService: GroceryService) {}

  @Post('add-grocery')
  addGrocery(@Body() createGroceryDto: CreateGroceryDto) {
    return this.groceryService.create(createGroceryDto);
  }

  @Delete('remove-grocery/:id')
  removeGrocery(@Param('id') id: string) {
    return this.groceryService.remove(id);
  }

  @Patch('update-grocery/:id')
  updateGrocery(@Param('id') id: string, @Body() updateGroceryDto: UpdateGroceryDto) {
    return this.groceryService.update(id, updateGroceryDto);
  }

  @Get('inventory')
  getInventory() {
    return this.groceryService.findAll();
  }
}
