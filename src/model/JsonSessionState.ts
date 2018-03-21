export interface JsonSessionState {
  id: string;
  sessionId: string;
  lastPlayer: string;
  nextPlayer: string;
  votes: { [cardId: string]: number };
  passedRounds: number;
}
