import {User} from "./user";
import {Theme} from "./theme";
import {Card} from "./card";
import {SubTheme} from "./subTheme";
import {Turn} from "./turn";

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
  subThemes: SubTheme[];
  cards: Card[];
  organiser: string;
  active: boolean;
  turns: Turn[];

  constructor() {
    this.suggestedCards = new Array<Card>();
    this.subThemes = new Array<SubTheme>();
    this.cards = new Array<Card>();
    this.players = new Array<string>();
    this.suggestedCards = new Array<Card>();
    this.turns = new Array<Turn>();
  }


}
