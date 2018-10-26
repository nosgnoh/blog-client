import { BlogClientPage } from './app.po';

describe('blog-client App', () => {
  let page: BlogClientPage;

  beforeEach(() => {
    page = new BlogClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
