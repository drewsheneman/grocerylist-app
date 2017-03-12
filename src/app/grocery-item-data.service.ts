import { Injectable } from '@angular/core';
import {GroceryItem} from './grocery-item';

@Injectable()
export class GroceryItemDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for GroceryItems
  groceryItems: GroceryItem[] = [];

  constructor() {
  }

  // Simulate POST /groceryItems
  addGroceryItem(groceryItem: GroceryItem): GroceryItemDataService {
    if (!groceryItem.id) {
      groceryItem.id = ++this.lastId;
    }
    this.groceryItems.push(groceryItem);
    return this;
  }

  // Simulate DELETE /groceryItems/:id
  deleteGroceryItemById(id: number): GroceryItemDataService {
    this.groceryItems = this.groceryItems
      .filter(groceryItem => groceryItem.id !== id);
    return this;
  }

  // Simulate PUT /groceryItems/:id
  updateGroceryItemById(id: number, values: Object = {}): GroceryItem {
    let groceryItem = this.getGroceryItemById(id);
    if (!groceryItem) {
      return null;
    }
    Object.assign(groceryItem, values);
    return groceryItem;
  }

  // Simulate GET /groceryItems
  getAllGroceryItems(): GroceryItem[] {
    return this.groceryItems;
  }

  // Simulate GET /groceryItems/:id
  getGroceryItemById(id: number): GroceryItem {
    return this.groceryItems
      .filter(groceryItem => groceryItem.id === id)
      .pop();
  }

  // Toggle groceryItem complete
  toggleGroceryItemComplete(groceryItem: GroceryItem){
    let updatedGroceryItem = this.updateGroceryItemById(groceryItem.id, {
      complete: !groceryItem.complete
    });
    return updatedGroceryItem;
  }

}