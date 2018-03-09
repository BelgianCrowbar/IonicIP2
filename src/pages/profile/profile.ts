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
import {Picture} from "../../model/picture";
import {error} from "util";


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

  private picture: Picture;
  imgsrc: string;
  user: User;
  loading: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private restService: RestProvider,
              private auth: AuthProvider,
              private httpClient: HttpClient) {
    this.user = new User('', '', '', '');

  }

  ionViewDidLoad() {
    this.picture = new Picture('', '', '');
    this.startloading('Inladen...');
    this.restService.get('users/currentuser', null)
      .subscribe(u => {
          this.user = u;
          console.log(this.user.pictureId);
          if (this.user.pictureId != null || this.user.pictureId != undefined || this.user.pictureId != null) {
            this.restService.get('pictures/get/' + this.user.pictureId, null).subscribe(
              data => {
                this.picture = data;
                this.imgsrc = 'data:image/png;base64,' + this.picture.value;
                this.stoploading();
              },
              error => {
                this.handleError(error);
                this.stoploading();
              }
            );
          } else {
            this.stoploading();
          }


        }, error2 => {
          this.stoploading();
          this.handleError(error2);
        }
      );
  }

  changeProfile(value: any) {
    this.startloading('Veranderen...');
    console.log(this.picture);
    if (this.picture != null) {
      this.restService.post('pictures/create', this.picture).subscribe(data => {
          console.log(data);
          this.user.pictureId = data.pictureId;
          this.user.firstName = value.firstName;
          this.restService.post('users/update', this.user)
            .subscribe(data => {
                this.user.firstName = value.firstName;
                this.stoploading();
                this.handleSucces();
              }
              ,
              error2 => {
                this.stoploading();
                this.handleError(error2);
              }
            );
        }
      );
    }
    else {
      this.user.firstName = value.firstName;
      this.restService.post('users/update', this.user)
        .subscribe(data => {
            this.user.firstName = value.firstName;
            this.stoploading();
            this.handleSucces();
          }
          ,
          error2 => {
            this.stoploading();
            this.handleError(error2);
          }
        );
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.picture.filename = file.name;
      this.picture.filetype = file.type;
      this.picture.value = reader.result.split(',')[1];
      this.imgsrc = 'data:image/png;base64,' + this.picture.value;
    };
  }

  startloading(message: string) {
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
    console.log('Error: ' + error);
    const toast = this.toastCtrl.create({
      message: 'Er is iets fout gelopen! ',
      duration: 5000,
      position: 'bottom'
    }).present();
  }

  handleSucces() {
    const toast = this.toastCtrl.create({
      message: 'Alles is goed opgeslaan',
      duration: 5000,
      position: 'bottom'
    }).present();
  }
}
