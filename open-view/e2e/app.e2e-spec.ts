import { OpenViewPage } from './app.po';

describe('open-view App', () => {
  let page: OpenViewPage;

  beforeEach(() => {
    page = new OpenViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
