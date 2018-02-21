import {Component, ViewChild} from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import {NgModel} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {finalize} from 'rxjs/operators/finalize';
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  @ViewChild('username')
  usernameModel: NgModel;

  constructor(private readonly authProvider: AuthProvider,
              private readonly loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController,
              private readonly navCtrl: NavController) {
  }

  register(value: any) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Signing up ...'
    });

    loading.present();

    this.authProvider
      .register(value)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        data => {},
        (jwt) => this.showSuccesToast(jwt));
  }

  private showSuccesToast(jwt) {
    if (jwt.error.text ==="Succes") {
      this.navCtrl.push(LoginPage);
      const toast = this.toastCtrl.create({
        message: 'Sign up successful please check mail',
        duration: 3000,
        position: 'bottom'
      }).present();
    }else if (jwt.error.text ==="Failure type 1"){
      const toast = this.toastCtrl.create({
        message: 'Email already registered',
        duration: 3000,
        position: 'bottom'
      }).present();
      this.usernameModel.control.setErrors({'usernameTaken': true});
    }else{
      this.handleError(jwt);
    }
  }

  handleError(error: any) {
    let message = 'Unexpected error occurred';

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });
    toast.present();
  }

}
