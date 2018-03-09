export class Picture {

  public pictureId: String;
  public filename: String;
  public filetype: String;
  public value: String;


  constructor(pictureId: String, filename: String, filetype: String, value: String) {
    this.pictureId = pictureId;
    this.filename = filename;
    this.filetype = filetype;
    this.value = value;
  }
}
