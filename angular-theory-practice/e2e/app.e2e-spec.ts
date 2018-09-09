import { OpenamOnboardUiPage } from './app.po';

describe('openam-onboard-ui App', () => {
  let page: OpenamOnboardUiPage;

  beforeEach(() => {
    page = new OpenamOnboardUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
