import {Page} from './app.po';
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

    it('FUCK THIS have a title saying Ionic App', () => {
      browser.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });

    it('should have a title saying Ionic App', () => {
      browser.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });

  })
});
