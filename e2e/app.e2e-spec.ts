import { JinkPage } from './app.po';

describe('jink App', function() {
  let page: JinkPage;

  beforeEach(() => {
    page = new JinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
