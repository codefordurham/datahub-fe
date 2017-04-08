import { NewappPage } from './app.po';

describe('datahub-fe App', () => {
  let page: NewappPage;

  beforeEach(() => {
    page = new NewappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CodeForDurham DataHub');
  });
});
