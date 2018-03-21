import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Session} from "../../model/session";
import {RestProvider} from "../../providers/rest/rest";
import {Card} from "../../model/card";
import {SessionState} from "../../model/sessionstate";
import {AuthProvider} from "../../providers/auth/auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Turn} from "../../model/turn";

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
  isGood: boolean = true;
  goodStyles: any[] = [];
  sessionState: SessionState;
  cards: Card[] = [];
  color: string[] = [];
  user: string;


  constructor(public navCtrl: NavController,
              public httpService: RestProvider,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              private readonly authProvider: AuthProvider,
              jwtHelper: JwtHelperService,
              private toastCtrl: ToastController) {
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

  presentActionSheet(card) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Stem voor ' + card.text,
      buttons: [
        {
          text: 'Stem',
          role: 'destructive',
          handler: () => {
            this.submitVote(card.id);
          }
        }, {
          text: 'Annuleren',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    let id = this.navParams.get('param1');
    this.getsession(id.sessionId);
  }


  getsession(sessionId: string) {
    this.isGood = true;
    this.degress = 360;
    this.cards = [];
    this.httpService.get('sessions/getSessionState/' + sessionId).subscribe(data => {
      this.sessionState = new SessionState(data);
    });

    this.httpService.get('sessions/getSession/' + sessionId).subscribe(data => {
      this.session = data;

      for (let card of this.session.cards) {
        this.cards.push(card);
      }
      for (let sub of this.session.subThemes) {
        for (let obj of sub.cards) {
          this.cards.push(obj);
        }
      }
    });
  }

  drawCirclePoints(card, i) {
    let styles;
    if (this.sessionState !== undefined) {
      this.degress -= 15;
      if (this.degress == 0) this.degress = 360;
      let vote = 0;
      if (this.sessionState.votes.has(card.id)) {
        vote = this.sessionState.votes.get(card.id);
      }
      let x = 0;
      let y = 0;
      let cx = 47.5;
      let cy = 47.5;
      let r = 47 - vote;
      x = cx + r * Math.cos(this.degress);
      y = cy + r * Math.sin(this.degress);


      if (this.color.length - 1 != i) {
        this.color.push("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
      }
      styles = {
        'top': x + '%',
        'left': y + '%',
        'background': this.color[i]
      };
      this.goodStyles[i] = styles;
      if (this.cards.length - 1 == i) {
        this.isGood = false;
      }
    }
    return styles;
  }

  getRounds(numberOfRounds: number) {
    return new Array(numberOfRounds);
  }

  submitVote(cardId: string) {
    if (this.user === this.sessionState.nextPlayer) {
      let turn = new Turn(this.user, cardId);
      this.session.turns.push(turn);
      this.httpService.post('sessions/addTurn/' + this.session.sessionId, turn).subscribe(data => {
        this.getsession(this.session.sessionId);
        const toast = this.toastCtrl.create({
          message: 'Uw stemde',
          duration: 5000,
          position: 'bottom'
        }).present();
      });

    }
  }
}
