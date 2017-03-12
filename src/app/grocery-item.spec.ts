import {GroceryItem} from './grocery-item';

describe('GroceryItem', () => {
  it('should create an instance', () => {
    expect(new GroceryItem()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let groceryItem = new GroceryItem({
      title: 'hello',
      complete: true
    });
    expect(groceryItem.title).toEqual('hello');
    expect(groceryItem.complete).toEqual(true);
  });
});
