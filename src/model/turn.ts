export class Turn {
  private id: string;
  private userId: string;
  private cardId: string;
  private timestamp: Date;

  constructor(userId : string, cardId: string)
  {
    this.userId = userId;
    this.cardId = cardId;
    this.timestamp = new Date();
  }
}
