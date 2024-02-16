// src/services/grocery.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from '../entities/grocery.entity';
import { CreateGroceryDto } from '../dto/create-grocery.dto';
import { UpdateGroceryDto } from '../dto/update-grocery.dto';
import { BookGroceryDto } from '../dto/book-grocery.dto';

@Injectable()
export class GroceryService {
  constructor(
    @InjectRepository(Grocery)
    private groceryRepository: Repository<Grocery>,
  ) {}

  async create(createGroceryDto: CreateGroceryDto): Promise<Grocery> {
    const grocery = this.groceryRepository.create(createGroceryDto);
    return this.groceryRepository.save(grocery);
  }

  async remove(id: string): Promise<void> {
    await this.groceryRepository.delete(id);
  }

  async update(id: string, updateGroceryDto: UpdateGroceryDto): Promise<Grocery> {
    const grocery = await this.groceryRepository.findOneOrFail(id);
    return this.groceryRepository.save({ ...grocery, ...updateGroceryDto });
  }

  async findAll(): Promise<Grocery[]> {
    return this.groceryRepository.find();
  }

  async bookItems(bookGroceryDto: BookGroceryDto): Promise<void> {
    // Implementation for booking grocery items (updating inventory, creating booking record, etc.)
    // Add your logic based on the simpler model described earlier.
  }
}
