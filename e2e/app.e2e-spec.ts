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

    it('Test stays do to bug in with e2e on CodeShip', () => {
     expect(0).toBeLessThanOrEqual(0);
    });

    it('should have a title saying Ionic App', () => {
      browser.getTitle().then(title => {
        expect(title).toEqual('Ionic App');
      });
    });

  })
});
