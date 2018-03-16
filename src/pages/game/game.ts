import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {SessionOverviewPage} from "../session-overview/session-overview";
import {Session} from "../../model/session";
import {RestProvider} from "../../providers/rest/rest";
import {Card} from "../../model/card";
import {number} from "ng2-validation/dist/number";
import {Picture} from "../../model/picture";

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
  degress: number = 360;
  session: Session = new Session();
  cards: Card[];
  isGood: boolean = true;
  goodStyles: any[] = [];

  constructor(public navCtrl: NavController,
              public httpService: RestProvider,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet(card) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Stem voor ' + card.text,
      buttons: [
        {
          text: 'Stem',
          role: 'destructive',
          handler: () => {
            console.log('Stem');
          }
        }, {
          text: 'Annuleren',
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
    let id = this.navParams.get('param1');
    this.httpService.get('sessions/getSession/' + id).subscribe(data => {
      this.session = data;
      this.cards = this.session.cards;

    });
  }

  drawCirclePoints(i) {
    this.degress -= 15;
    //TODO get Aantal stemmen
    if (this.degress == 0) this.degress = 360;
    console.log(i + ' ' + this.degress);
    let vote = 0;
    let x = 0;
    let y = 0;
    let cx = 47.5;
    let cy = 47.5;
    let r = 47 - vote;
    x = cx + r * Math.cos(this.degress);
    y = cy + r * Math.sin(this.degress);
    let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    let styles = {
      'top': x + '%',
      'left': y + '%',
      'background': color
    };
    this.goodStyles[i] = styles;
    if (i == this.cards.length - 1) {
      this.isGood = false;
    }
    return styles;
  }

  getRounds(numberOfRounds: number) {
    return new Array(numberOfRounds);
  }
}
