import {Page} from './app.po';
import {browser, element} from "protractor";
import {By} from "selenium-webdriver";
import {del} from "selenium-webdriver/http";
import {delay} from "q";

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
      page.navigateTo('/');
      delay(1000);
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
