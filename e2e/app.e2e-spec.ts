import { AngularCookUnitTestingPage } from './app.po';

describe('angular-cook-unit-testing App', () => {
  let page: AngularCookUnitTestingPage;

  beforeEach(() => {
    page = new AngularCookUnitTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
