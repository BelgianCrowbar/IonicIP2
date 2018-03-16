import {UUID} from "angular2-uuid";

export class Review {
  id: string;
  text: string;
  from: string;
  userid: string;

  constructor(from: string, text: string, userid: string) {
    this.from = from;
    this.text = text;
    this.userid = userid;
    this.id = UUID.UUID();
  }
}
