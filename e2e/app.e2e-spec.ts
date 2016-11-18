import { NestedPostCommentImageAngularPage } from './app.po';

describe('nested-post-comment-image-angular App', function() {
  let page: NestedPostCommentImageAngularPage;

  beforeEach(() => {
    page = new NestedPostCommentImageAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
