import {Component} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthProvider} from "../../providers/auth/auth";
import {HttpClient} from "@angular/common/http";
import {ProfilePage} from "../profile/profile";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: string;
  message: string;


  constructor(private readonly authProvider: AuthProvider,
              jwtHelper: JwtHelperService,
              private readonly httpClient: HttpClient,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        const decoded = jwtHelper.decodeToken(jwt);
        this.user = decoded.sub
      }
      else {
        this.user = null;
      }
    });
  }

  profilePage() {
    this.navCtrl.setRoot(ProfilePage)
  }
}
