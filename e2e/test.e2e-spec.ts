import {browser, by, element} from "protractor";
import {protractor} from "protractor/built/ptor";


describe('register specs', () => {
  beforeEach(() => {
    browser.get('');
    browser.driver.sleep(500);
  });

  it('should go to register screen', () => {
    element(by.css('button[ng-reflect-color="secondary"]')).click();
    browser.driver.sleep(2000);
    expect(element.all(by.tagName('ion-title'))
      .get(2)
      .getAttribute('innerHTML'))
      .toContain('register');
  });

});

describe('login specs', () => {
  beforeEach(() => {
    browser.get('');
    browser.driver.sleep(250);
  });

  it('should be on login screen', () => {
    expect(element.all(by.tagName('ion-title'))
      .get(1)
      .getAttribute('innerHTML'))
      .toContain('login');
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
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Home');
    });
  });

});

describe('home specs', () => {
  beforeEach(() => {
    browser.get('');
    browser.driver.sleep(250);
  });

  it('should go to profile screen', () => {
    let profilebtn = element(by.id('btnProfile'));
    profilebtn.click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Profiel');
    });
  });

  it('should go to profile screen again sidemenu', function () {
    let menubtn = element(by.id('btnSideMenu'));
    menubtn.click();
    browser.driver.sleep(2000);
    element.all(by.tagName('ion-list')).first()
      .all(by.tagName('button')).get(2)
      .click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Profiel');
    });
  });

  it('should go to home screen with sidemenu', function () {
    let menubtn = element(by.id('btnSideMenu'));
    menubtn.click().then(() => {
      browser.driver.sleep(2000);
      element.all(by.tagName('ion-list')).first()
        .all(by.tagName('button')).get(0)
        .click().then(() => {
        browser.driver.sleep(2000);
        expect(element.all(by.tagName('ion-title'))
          .get(1)
          .getAttribute('innerHTML'))
          .toContain('Home');
      });
    });
  });

  it('should go to session screen with homescreen', function () {
    let sessionbtn = element(by.css('button[ng-reflect-block]'));
    sessionbtn.click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('sessie overzicht');
    });
  });

  it('should go to login screen with sidemenu', function () {
    let menubtn = element(by.id('btnSideMenu'));
    menubtn.click().then(() => {
      browser.driver.sleep(2000);
      element.all(by.tagName('ion-list')).first()
        .all(by.tagName('button')).get(3)
        .click().then(() => {
        browser.driver.sleep(2000);
        expect(element.all(by.tagName('ion-title'))
          .get(1)
          .getAttribute('innerHTML'))
          .toContain('login');
      });
    });
  });

  it('should go to home and back to login', function () {
    let mail = element(by.css('input[ng-reflect-name=email]'));
    mail.sendKeys('indy.dewacker@student.kdg.be');
    let password = element(by.css('input[ng-reflect-name=password]'));
    password.sendKeys('admin');
    const EC = protractor.ExpectedConditions;
    let loginbutton = element(by.id('btnLogin'));
    browser.driver.sleep(2000);
    loginbutton.click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Home');
    });
    let logoutbtn = element.all(by.css('button[ ng-reflect-block]')).get(2);
    logoutbtn.click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('login');
    });
  });
});

describe('profile specs', () => {
  beforeEach(() => {
    browser.get('');
    browser.driver.sleep(250);
  });

  it('should go to home screen', () => {
    let mail = element(by.css('input[ng-reflect-name=email]'));
    mail.sendKeys('leander.coevoet@student.kdg.be');
    let password = element(by.css('input[ng-reflect-name=password]'));
    password.sendKeys('admin');
    const EC = protractor.ExpectedConditions;
    let loginbutton = element(by.id('btnLogin'));
    browser.driver.sleep(250);
    loginbutton.click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Home');
    });
  });

  it('should change profile name', () => {
    let profilebtn = element(by.id('btnProfile'));
    profilebtn.click().then(() => {
      browser.driver.sleep(2000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Profiel');
    });

    let inputName = element.all(by.css('input')).first();
    inputName.clear().then(() => {
      inputName.sendKeys('Leander :D');
    });
    browser.sleep(500);
    element.all(by.css('button[type="submit"]'))
      .click().then(() => {
      browser.sleep(5000);
      expect(element.all(by.tagName('ion-title'))
        .get(1)
        .getAttribute('innerHTML'))
        .toContain('Home');
    });
    profilebtn.click().then(() => {
      browser.driver.sleep(2000);
      expect(inputName
        .getAttribute('value'))
        .toContain('Leander :D');
    });
  });

});


