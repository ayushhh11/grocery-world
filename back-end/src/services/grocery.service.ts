// src/services/grocery.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from '../entities/grocery.entity';
import { GroceryDto } from '../dtos/create-grocery.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class GroceryService extends TypeOrmCrudService<Grocery> {
  constructor(
    @InjectRepository(Grocery) 
    repo: Repository<Grocery>,
  ) {
    super(repo);
  }

  async create(createGroceryDto: GroceryDto): Promise<Grocery> {
    const createGrocery = this.repo.create(createGroceryDto);
    return await this.repo.save(createGrocery);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }

  async update(id: string, updateGroceryDto: GroceryDto): Promise<Grocery> {
    const grocery = await this.repo.findOneOrFail(id);
    return this.repo.save({ ...grocery, ...updateGroceryDto });
  }

  async findAll(): Promise<Grocery[]> {
    return this.repo.find();
  }

  async bookItems(bookGroceryDto: GroceryDto): Promise<void> {
    // Implementation for booking grocery items (updating inventory, creating booking record, etc.)
    // Add your logic based on the simpler model described earlier.
  }
}
