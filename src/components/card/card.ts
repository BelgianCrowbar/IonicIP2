import {Component, Input} from '@angular/core';
import {Card} from "../../model/card";

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-card',
  templateUrl: 'card.html'
})
export class CardComponent {
  @Input()
  vCard: Card;
  @Input()
  cardNr: number;

  degree: number=15;
  text: string;

  constructor() {
    console.log('Hello CardComponent Component');
  }

  drawCirclePoints(i) {
    console.log("test");
    this.degree *=i;
    //TODO get Aantal stemmen
    let vote = 0;
    let x = 0;
    let y = 0;
    let cx = 47.5;
    let cy = 47.5;
    let r = 47 - vote;
    x = cx + r * Math.cos(this.degree);
    y = cy + r * Math.sin(this.degree);
    let styles = {
      'top': x + '%',
      'left': y + '%'
    };
    return styles;
  }

}
