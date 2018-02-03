import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public actionSheetCtrl: ActionSheetController) {

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
        },{
          text: 'Archive',

          handler: () => {
            console.log('Archive clicked');
          }
        },{
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
