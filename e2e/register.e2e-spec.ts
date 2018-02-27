import {browser, by, element} from "protractor";
import {protractor} from "protractor/built/ptor";



describe('login specs', () => {

  beforeEach(() => {
    browser.get('');
    browser.driver.sleep(250);
  });

  it('should be on login screen', () => {
    expect(element(by.tagName('ion-title'))
      .getAttribute('innerHTML'))
      .toContain('login');
  });

  it('should go to register screen',  () => {
    element(by.id('btnSignUp')).click();
    browser.driver.sleep(1000);
    expect(element.all(by.tagName('ion-title'))
      .get(1)
      .getText()
    ).toContain('register')
  });

  it('should go to home screen', () => {
    let mail = element(by.css('input[ng-reflect-name=email]'));
    mail.sendKeys('indy.dewacker@student.kdg.be');
    let password = element(by.css('input[ng-reflect-name=password]'));
    password.sendKeys('admin');
    const EC = protractor.ExpectedConditions;
    let loginbutton = element(by.id('btnLogin'));
    browser.driver.sleep(250);
    loginbutton.click().then(() => {
      browser.driver.sleep(2000);
      expect(element(by.tagName('ion-title'))
        .getAttribute('innerHTML'))
        .toContain('Home');
    });
  });
});


