import {Page} from './app.po';
import {browser} from "protractor";
import {timeout} from "q";
import {timeInterval} from "rxjs/operator/timeInterval";

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      browser.waitForAngularEnabled(true);
      page.navigateTo('/');
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
