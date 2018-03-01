import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {NgModel} from "@angular/forms";
import {RestProvider} from "../../providers/rest/rest";
import {User} from "../../model/user";
import {Storage} from "@ionic/storage";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthProvider} from "../../providers/auth/auth";
import {tap} from "rxjs/operators/tap";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {SERVER_URL} from "../../config";
import {RequestOptions, RequestOptionsArgs} from "@angular/http";


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild('username')
  usernameModel: NgModel;

  user: User;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private restService: RestProvider,
              private auth: AuthProvider,
              private httpClient: HttpClient) {
    auth.checkLogin();
    this.user = new User('', '', '')
  }

  ionViewDidLoad() {
    this.startloading('Inladen...');
    this.restService.get('users/currentuser', null)
      .subscribe(u => {
          this.user = u;
          this.stoploading();
        }, error2 => {
          this.stoploading();
          this.handleError(error2);
        }
      )
    ;
  }

  changeProfile(value: any) {
    this.startloading('Veranderen...');
    const body = JSON.stringify({newName: value.firstName});
    this.restService.post('users/update/', body)
      .subscribe(data => {
        this.user.firstName = value.firstName;
        this.stoploading();
        this.handleSucces();
        }, error2 => {
          this.stoploading();
          this.handleError(error2);
        }
      );
  }

  startloading(message:string ) {
    this.loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: message
    });
    this.loading.present();
  }

  stoploading() {
    this.loading.dismiss();
  }

  handleError(error: any) {
    const toast = this.toastCtrl.create({
      message: 'Er is iets fout gelopen! ' + error,
      duration: 5000,
      position: 'bottom'
    }).present();
  }

  handleSucces(){
    const toast = this.toastCtrl.create({
      message: 'Alles is goed opgeslaan veranderd',
      duration: 5000,
      position: 'bottom'
    }).present();
  }
}
