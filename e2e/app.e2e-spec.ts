import { Page } from './app.po';
import {browser} from "protractor";
import { WebDriver} from "selenium-webdriver";

describe('App', () => {
  let page: Page;
  let driver: WebDriver;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
      browser.waitForAngular();
      browser.waitForAngularEnabled();

    });

    it('FUCK THIS have a title saying Ionic App', () => {
      driver.get('http://localhost:8100/');
      driver.getTitle().then(title => {
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
