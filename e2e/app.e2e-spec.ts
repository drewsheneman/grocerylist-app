import { GroceryListAppPage } from './app.po';

describe('grocery-list-app App', function() {
  let page: GroceryListAppPage;

  beforeEach(() => {
    page = new GroceryListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
