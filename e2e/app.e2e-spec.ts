import { Page } from './app.po';
import {browser} from "protractor";

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Ionic App', () => {
      page.getTitle().then(title => {
        browser.ignoreSynchronization = true;
        expect(title).toEqual('Ionic App');
      });
    });
  })
});
