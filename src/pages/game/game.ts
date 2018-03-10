import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SessionOverviewPage} from "../session-overview/session-overview";
import {Session} from "../../model/session";
import {RestProvider} from "../../providers/rest/rest";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  session: Session;


  constructor(public navCtrl: NavController,
              public httpService: RestProvider,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Cinema',
      buttons: [
        {
          text: 'Film 1',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',

          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    let id = this.navParams.get('param1');
    this.httpService.get('sessions/get/'+id).subscribe(data => {
      this.session = data;
    })
  }
}
