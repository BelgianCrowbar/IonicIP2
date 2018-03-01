import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {AuthProvider} from "../providers/auth/auth";
import {GamePage} from "../pages/game/game";
import {ProfilePage} from "../pages/profile/profile";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private authProvider: AuthProvider) {
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Game', component: GamePage},
      {title: 'Profile', component: ProfilePage}
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        this.rootPage = HomePage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });

    authProvider.checkLogin();
  }

  logout() {
    this.authProvider.logout();
  }

  homePage() {
    this.nav.setRoot(HomePage);
  }

  gamePage() {
    this.nav.setRoot(GamePage);
  }

  profilePage() {
    this.nav.setRoot(ProfilePage);
  }

}

