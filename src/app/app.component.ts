import { Component } from '@angular/core';
import {GroceryItem} from './grocery-item';
import { GroceryItemDataService } from './grocery-item-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GroceryItemDataService]
})
export class AppComponent {
  newGroceryItem: GroceryItem = new GroceryItem();

  constructor(private groceryItemDataService: GroceryItemDataService) {
  }

  addGroceryItem() {
    this.groceryItemDataService.addGroceryItem(this.newGroceryItem);
    this.newGroceryItem = new GroceryItem();
  }

  toggleGroceryItemComplete(groceryItem) {
    this.groceryItemDataService.toggleGroceryItemComplete(groceryItem);
  }

  removeGroceryItem(groceryItem) {
    this.groceryItemDataService.deleteGroceryItemById(groceryItem.id);
  }

  get groceryItems() {
    return this.groceryItemDataService.getAllGroceryItems();
  }
}
