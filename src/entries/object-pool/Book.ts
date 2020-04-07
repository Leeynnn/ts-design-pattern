export class Book {
  public title: string
  constructor(title: string) {
    this.title = title
  }

  public read(reader: string) {
    document.write(`${reader}借阅了一本${this.title}<br/>`)
  }
}
