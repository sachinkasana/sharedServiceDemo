import { SharedServiceDemoPage } from './app.po';

describe('shared-service-demo App', () => {
  let page: SharedServiceDemoPage;

  beforeEach(() => {
    page = new SharedServiceDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
