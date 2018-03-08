import {User} from "./user";
import {Theme} from "./theme";

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

  constructor() {
  }


}
