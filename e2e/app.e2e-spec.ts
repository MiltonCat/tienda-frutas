import { TiendaFrutasPage } from './app.po';

describe('tienda-frutas App', function() {
  let page: TiendaFrutasPage;

  beforeEach(() => {
    page = new TiendaFrutasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
