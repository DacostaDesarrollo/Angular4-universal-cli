import { Angular4UniversalPage } from './app.po';

describe('angular4-universal App', () => {
  let page: Angular4UniversalPage;

  beforeEach(() => {
    page = new Angular4UniversalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
