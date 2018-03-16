import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Picture} from "../../model/picture";
import {RestProvider} from "../../providers/rest/rest";
import {Card} from "../../model/card";
import {Component, EventEmitter, Output} from "@angular/core";
import {Session} from "../../model/session";
import {SessionOverviewPage} from "../session-overview/session-overview";

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  private picture: Picture;
  imgsrc: string;
  loading: any;
  card: Card = new Card('');
  session: Session = new Session();

  @Output()
  newCardEmitter = new EventEmitter<Card>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly loadingCtrl: LoadingController,
              private restService: RestProvider,
              private toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.picture = new Picture('', '', '');
    this.picture.pictureId = this.card.pictureId;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
    this.session = this.navParams.get('param1');
  }

  onFileChange(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(file);
      this.picture.filename = file.name;
      this.picture.filetype = file.type;
      this.picture.value = reader.result.split(',')[1];
      this.imgsrc = 'data:image/png;base64,' + this.picture.value;
    };
  }

  onSubmit(value: any) {
    console.log('test');
    this.startloading('Toevoegen...');
    console.log(this.picture);
    if (this.picture.value !== undefined && this.picture.value !== "") {
      const body = this.picture;
      this.restService.post('pictures/create', body).subscribe(
        data => {
          this.picture = data;
          this.card.pictureId = this.picture.pictureId;
          this.session.suggestedCards.push(this.card);
          this.restService.post('sessions/update', this.session).subscribe(
            data => {
              this.session = data;
              this.stoploading();
              this.handleSucces();
              this.navCtrl.setRoot(SessionOverviewPage);
            }
            ,
            error2 => {
              this.stoploading();
              this.handleError(error2);
            }
          );
        }
      );
    } else {
      this.session.suggestedCards.push(this.card);
      this.restService.post('sessions/update', this.session).subscribe(
        data => {
          this.session = data;
          this.stoploading();
          this.handleSucces();
          this.navCtrl.setRoot(SessionOverviewPage);
        },
        error2 => {
          this.stoploading();
          this.handleError(error2);
        }
      );
    }
  }

  private startloading(message: string) {
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
      message: 'Alles is goed toegevoegd',
      duration: 5000,
      position: 'bottom'
    }).present();
  }

  cancel() {
    this.navCtrl.setRoot(SessionOverviewPage);
  }
}
