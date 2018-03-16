export class Picture {
  public  pictureId: string;
  public filename: String;
  public filetype: String;
  public value: String;




  constructor( filename: String, filetype: String, value: String) {
    this.filename = filename;
    this.filetype = filetype;
    this.value = value;
  }
}
