import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SessionOverviewPage} from "../session-overview/session-overview";
import {Session} from "../../model/session";
import {RestProvider} from "../../providers/rest/rest";
import {Card} from "../../model/card";
import {number} from "ng2-validation/dist/number";

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
  card1: Card = new Card("1", "test1", "1");
  card2: Card = new Card("2", "test2", "2");
  card3: Card = new Card("3", "test3", "3");

  session: Session = new Session();
  cards: Card[];
  cardCount: number[];
  total: number;
  messure: number[] = [];

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
    console.log('fire');
    this.cards = [this.card1, this.card2, this.card3];
    this.cardCount = [0, 1, 2];
    let id = this.navParams.get('param1');
    //TODO HTTP call session
    this.httpService.get('sessions/getSession/' + id).subscribe(data => {
      this.session = data;
    });

    for (let obj of this.cardCount) {
      if (isNaN(this.messure[obj])) {
        this.messure[obj] = 0;
      }else {
        this.messure[obj] += 1;
      }
    }
  }

  getRounds(numberOfRounds: number) {
    return new Array(numberOfRounds);
  }
}
