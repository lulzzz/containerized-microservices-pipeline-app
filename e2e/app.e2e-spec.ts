import { AppPage } from './app.po';

describe('containerized-microservices-pipeline App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    const mockTitle = 'Welcome to Test Login Service!';
    expect(page.getParagraphText()).toEqual(mockTitle);
  });
});
