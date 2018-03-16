import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {CustomFormsModule} from 'ng2-validation';
import {Storage, IonicStorageModule} from "@ionic/storage";
import {AuthProvider} from "../providers/auth/auth";
import {HttpClientModule} from "@angular/common/http";
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt'
import {HttpModule} from "@angular/http";
import {GamePage} from "../pages/game/game";
import {ProfilePage} from "../pages/profile/profile";
import { RestProvider } from '../providers/rest/rest';
import {SessionOverviewPage} from "../pages/session-overview/session-overview";
import {ComponentsModule} from "../components/components.module";
import {CardComponent} from "../components/card/card";



export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get('token'),
   // whitelistedDomains: ['https://springip2.herokuapp.com/']
    whitelistedDomains: ['http://localhost:8080/']
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    GamePage,
    ProfilePage,
    SessionOverviewPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CustomFormsModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    GamePage,
    ProfilePage,
    SessionOverviewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RestProvider,
  ],

})
export class AppModule {
}
