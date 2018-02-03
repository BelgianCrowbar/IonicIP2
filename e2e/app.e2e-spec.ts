import {Page} from './app.po';
import {browser} from "protractor";

describe('App', () => {
  let page: Page;


  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      browser.get('/');
      page.navigateTo('/');
      browser.waitForAngularEnabled(true);
    });

    it('FUCK THIS have a title saying Ionic App', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });

    it('should have a title saying Ionic App', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });

  })
});
