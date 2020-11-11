export class Phone {
  id: string;
  number: string;

  constructor(base?: Partial<Phone>) {
    if (base) {
      this.id = base.id || this.id;
      this.number = base.number || this.number;
    }
  }
}
