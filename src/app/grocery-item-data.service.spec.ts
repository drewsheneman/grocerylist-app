/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {GroceryItem} from './grocery-item';
import { GroceryItemDataService } from './grocery-item-data.service';

describe('GroceryItemDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryItemDataService]
    });
  });

  it('should ...', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllGroceryItems()', () => {

    it('should return an empty array by default', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      expect(service.getAllGroceryItems()).toEqual([]);
    }));

    it('should return all groceryItems', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem1 = new GroceryItem({title: 'Hello 1', complete: false});
      let groceryItem2 = new GroceryItem({title: 'Hello 2', complete: true});
      service.addGroceryItem(groceryItem1);
      service.addGroceryItem(groceryItem2);
      expect(service.getAllGroceryItems()).toEqual([groceryItem1, groceryItem2]);
    }));

  });

  describe('#save(groceryItem)', () => {

    it('should automatically assign an incrementing id', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem1 = new GroceryItem({title: 'Hello 1', complete: false});
      let groceryItem2 = new GroceryItem({title: 'Hello 2', complete: true});
      service.addGroceryItem(groceryItem1);
      service.addGroceryItem(groceryItem2);
      expect(service.getGroceryItemById(1)).toEqual(groceryItem1);
      expect(service.getGroceryItemById(2)).toEqual(groceryItem2);
    }));

  });

  describe('#deleteGroceryItemById(id)', () => {

    it('should remove groceryItem with the corresponding id', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem1 = new GroceryItem({title: 'Hello 1', complete: false});
      let groceryItem2 = new GroceryItem({title: 'Hello 2', complete: true});
      service.addGroceryItem(groceryItem1);
      service.addGroceryItem(groceryItem2);
      expect(service.getAllGroceryItems()).toEqual([groceryItem1, groceryItem2]);
      service.deleteGroceryItemById(1);
      expect(service.getAllGroceryItems()).toEqual([groceryItem2]);
      service.deleteGroceryItemById(2);
      expect(service.getAllGroceryItems()).toEqual([]);
    }));

    it('should not removing anything if groceryItem with corresponding id is not found', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem1 = new GroceryItem({title: 'Hello 1', complete: false});
      let groceryItem2 = new GroceryItem({title: 'Hello 2', complete: true});
      service.addGroceryItem(groceryItem1);
      service.addGroceryItem(groceryItem2);
      expect(service.getAllGroceryItems()).toEqual([groceryItem1, groceryItem2]);
      service.deleteGroceryItemById(3);
      expect(service.getAllGroceryItems()).toEqual([groceryItem1, groceryItem2]);
    }));

  });

  describe('#updateGroceryItemById(id, values)', () => {

    it('should return groceryItem with the corresponding id and updated data', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem = new GroceryItem({title: 'Hello 1', complete: false});
      service.addGroceryItem(groceryItem);
      let updatedGroceryItem = service.updateGroceryItemById(1, {
        title: 'new title'
      });
      expect(updatedGroceryItem.title).toEqual('new title');
    }));

    it('should return null if groceryItem is not found', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem = new GroceryItem({title: 'Hello 1', complete: false});
      service.addGroceryItem(groceryItem);
      let updatedGroceryItem = service.updateGroceryItemById(2, {
        title: 'new title'
      });
      expect(updatedGroceryItem).toEqual(null);
    }));

  });

  describe('#toggleGroceryItemComplete(groceryItem)', () => {

    it('should return the updated groceryItem with inverse complete status', inject([GroceryItemDataService], (service: GroceryItemDataService) => {
      let groceryItem = new GroceryItem({title: 'Hello 1', complete: false});
      service.addGroceryItem(groceryItem);
      let updatedGroceryItem = service.toggleGroceryItemComplete(groceryItem);
      expect(updatedGroceryItem.complete).toEqual(true);
      service.toggleGroceryItemComplete(groceryItem);
      expect(updatedGroceryItem.complete).toEqual(false);
    }));

  });

});
