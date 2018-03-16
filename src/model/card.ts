import {UUID} from 'angular2-uuid';
import {Review} from "./review";

export class Card {

  id: string;
  text: string;
  pictureId: string;
  reviews: Review[];

  constructor(text: string) {
    this.text = text;
    this.id = UUID.UUID();
    this.reviews = [];
    this.pictureId=null;
  }
}

