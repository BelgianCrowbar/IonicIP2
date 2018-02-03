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
      page.navigateTo('/');
      browser.waitForAngularEnabled(true);
      
    });

    it('FUCK THIS have a title saying Ionic App', () => {
      setTimeout(() => {
        page.getTitle().then(title => {
          expect(title).toEqual('Ionic App');
        });
      }, 1000);
    });

    it('should have a title saying Ionic App', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });
  })
});
