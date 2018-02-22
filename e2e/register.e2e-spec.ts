import {browser, element, by} from "protractor";

describe('register screen', () => {
  beforeEach(() => {
    browser.get('');
  });

  it('should have a button saying Sign up', () => {
  expect(element(by.id('btnSignUp'))
    .toEqual('Sign Up'));
  });

});

