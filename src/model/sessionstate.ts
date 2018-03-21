import {JsonSessionState} from './JsonSessionState';

export class SessionState {
  id: string;
  sessionId: string;
  lastPlayer: string;
  nextPlayer: string;
  votes: Map<string, number>;
  passedRounds: number;

  constructor(json: JsonSessionState) {
    this.id = json.id;
    this.sessionId = json.sessionId;
    this.lastPlayer = json.lastPlayer;
    this.nextPlayer = json.nextPlayer;
    this.passedRounds = json.passedRounds;
    this.votes = new Map<string, number>();
    if (json.votes != undefined) {
      Object.keys(json.votes).forEach(key => {
        this.votes.set(key, json.votes[key]);
      });
    }
  }
}
