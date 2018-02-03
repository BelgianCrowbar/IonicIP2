import {Page} from './app.po';
import {browser} from "protractor";
import {titleCase} from "@ionic/app-scripts";

describe('App', () => {
  let page: Page;


  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {

      browser.get('/');
     // page.navigateTo('/');
    });

    it('FUCK THIS have a title saying Ionic App', () => {
    browser.getTitle().then(title => {
      expect(title).toEqual('Ionic App');
    })

    });

   /* it('should have a title saying Ionic App', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });*/
  })
});
