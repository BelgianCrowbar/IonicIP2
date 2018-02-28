export class Theme {
  id: string;
  name: string;
  description: string;
  tags: string[];

  constructor(id: string , name: string, description: string, tags: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tags = tags;
  }
}
