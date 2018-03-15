import {Card} from './card';
import {UUID} from 'angular2-uuid';
import {Picture} from './Picture';

export class SubTheme {

  id: string;
  text: string;
  cards: Card[];
  pictureId: string;

  constructor(text: string, cards: Card[]) {
    this.text = text;
    this.cards = cards;
    this.id = UUID.UUID();
    this.pictureId = null;
  }
}
