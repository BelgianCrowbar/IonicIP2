export class Card {

  id: string;
  text: string;
  pictureId: string;


  constructor(id: string, text: string, pictureId: string) {
    this.id = id;
    this.text = text;
    this.pictureId = pictureId;
  }
}
