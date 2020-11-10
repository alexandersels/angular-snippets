export class Phone {
  number: string;

  constructor(base?: Partial<Phone>) {
    if (base) {
      this.number = base.number || this.number;
    }
  }
}
