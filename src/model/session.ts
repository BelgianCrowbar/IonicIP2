import {User} from "./user";
import {Theme} from "./theme";
import {Card} from "./card";

export class Session {
  sessionId: string;
  themeId: string;
  players: string[];
  numberOfRounds: number;
  canComment: boolean;
  addCardUser: boolean;
  timeUserRound: number;
  startTime: Date;
  sessionName: string;
  suggestedCards: Card[];

  constructor() {
    this.suggestedCards = new Array<Card>();
  }


}
