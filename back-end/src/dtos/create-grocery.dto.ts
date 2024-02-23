import { Grocery } from "entities/grocery.entity";

// src/dto/create-grocery.dto.ts
export class GroceryDto {
    name: string;
    price: number;
    constructor(groceryStore: Grocery) {
      this.name = groceryStore.name;
      this.price = groceryStore.price;
      
    }
  }
  