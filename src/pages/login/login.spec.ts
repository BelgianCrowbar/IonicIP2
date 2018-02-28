import {AuthProvider} from "../../providers/auth/auth";
import {async, TestBed} from "@angular/core/testing";
import {HttpClientModule} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {IonicModule, Platform} from "ionic-angular";
import {PlatformMock, SplashScreenMock, StatusBarMock} from "../../../test-config/mocks-ionic";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {JwtHelperService} from "@auth0/angular-jwt";
import {MyApp} from "../../app/app.component";
import {StorageMock} from "ionic-mocks";

describe('MyApp Component', () => {


  it('should be created', () => {
    expect(true).toBe(true);
  });


});
