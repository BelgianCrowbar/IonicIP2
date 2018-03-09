export class User {
  email: string;
  firstName: string;
  lastName: string;
  pictureId: string;

  constructor(email: string, firstName: string, lastName: string, pictureId: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pictureId = pictureId;
  }
}
