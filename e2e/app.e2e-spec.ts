import { MaterialExamplePage } from './app.po';

describe('material-example App', () => {
  let page: MaterialExamplePage;

  beforeEach(() => {
    page = new MaterialExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
