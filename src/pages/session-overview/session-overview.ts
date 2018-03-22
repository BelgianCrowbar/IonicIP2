import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Session} from "../../model/session";
import {CardsPage} from "../cards/cards";
import {GamePage} from "../game/game";

/**
 * Generated class for the SessionOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-session-overview',
  templateUrl: 'session-overview.html',
})
export class SessionOverviewPage {
  activeSessions: Session[] = [];
  plannedSessions: Session[] = [];
  stoppedSessions: Session[] = [];


  constructor(private restService: RestProvider,
              public actionSheetCtrl: ActionSheetController,
              public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.restService.get('sessions/getAll').subscribe(ses => {
      console.log(ses);
      for (const obj of ses) {
        console.log(obj);
        if (obj.startTime > new Date()) {
          this.plannedSessions.push(obj);
        } else if (obj.startTime < new Date() || obj.active) {
          this.activeSessions.push(obj);
        }
      }
    }, error2 => console.log(error2));
  }

  playSession(id: string) {
    console.log('Go Game Page');
    this.navCtrl.push(GamePage, {param1: id})
  }

  addCard(session) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Add cards',
      buttons: [
        {
          text: 'Add',
          role: 'add',
          handler: () => {
            console.log('Add clicked');
            this.navCtrl.push(CardsPage, {
              param1: session
            });
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

  playGame(session: Session) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Spel spelen',
      buttons: [
        {
          text: 'Play',
          role: 'play',
          handler: () => {
            console.log('Play clicked');
            this.navCtrl.push(GamePage, {
              param1: session
            });
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
}
