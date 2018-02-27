import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
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



export function jwtOptionsFactory(storage: Storage) {
  return {
    tokenGetter: () => storage.get('jwt_token'),
    whitelistedDomains: ['localhost:8080']
  }
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
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
    CustomFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
  ]
})
export class AppModule {
}
