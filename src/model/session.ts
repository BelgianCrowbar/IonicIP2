import {User} from "./user";
import {Theme} from "./theme";

export class Session {
  sessionId: string;
  theme: Theme;
  players: String[];
  numberOfRounds: number;
  canComment: boolean;
  addCardUser: boolean;
  timeUserRound: number;
  startTime: Date;
  sessionName: string;

  constructor() {
  }


}
