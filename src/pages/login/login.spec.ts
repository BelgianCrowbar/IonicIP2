import {async, getTestBed, TestBed} from '@angular/core/testing';
import {IonicModule, LoadingController, NavController, Platform, ToastController, UrlSerializer} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {LoginPage} from './login';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';
import {AuthProvider} from "../../providers/auth/auth";
import {mockNavController} from "ionic-angular/umd/util/mock-providers";
import {AppMock, LoadingControllerMock, NavControllerMock, ToastControllerMock} from "ionic-mocks";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {register} from "ts-node/dist";
import {by, element} from "protractor";

describe('MyApp Component', () => {
  let fixture;
  let component;
  let submitEl;
  let loginEl;
  let passwordEl;
  let toolbarEl;
  let auth;
  let authProviderStub;

  beforeEach(async(() => {
    authProviderStub = {
      jwtTokenName: 'token'
    };


    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        {provide: NavController, useFactory: () => NavControllerMock.instance()},
        {provide: LoadingController, useFactory: () => LoadingControllerMock.instance()},
        {provide: ToastController, useFactory: () => ToastControllerMock.instance()},
        {provide: AuthProvider, useValue: authProviderStub}]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('#btnLogin'));
    loginEl = fixture.debugElement.query(By.css('ion-input[name=email]'));
    passwordEl = fixture.debugElement.query(By.css('ion-input[name=password'));
    toolbarEl = fixture.debugElement.query(By.css('.toolbar-title'));
   /* TestBed.configureTestingModule({ providers: [AuthProvider] });
    auth = TestBed.get(AuthProvider);*/
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should have 2 buttons', () => {
    fixture.detectChanges();
    const button: HTMLImageElement = fixture.debugElement.query(By.css('#btnSignUp')).nativeElement;
    expect(button.innerText).toContain('Sign up');
  });

 /* it('test checklogin', () => {
    expect(auth.checkLogin()).toBe('real value');
  });*/
});
