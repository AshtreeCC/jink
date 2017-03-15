import { V100Rc1Page } from './app.po';

describe('v100-rc1 App', () => {
  let page: V100Rc1Page;

  beforeEach(() => {
    page = new V100Rc1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
