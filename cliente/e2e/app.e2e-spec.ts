import { PaaudPage } from './app.po';

describe('paaud App', () => {
  let page: PaaudPage;

  beforeEach(() => {
    page = new PaaudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
