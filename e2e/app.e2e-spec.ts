import { NgcliIssuesPage } from './app.po';

describe('ngcli-issues App', function() {
  let page: NgcliIssuesPage;

  beforeEach(() => {
    page = new NgcliIssuesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
