export class FormChangedEvent<T> {
  valid = false;
  data: T;

  constructor(base?: Partial<FormChangedEvent<T>>) {
    if (base) {
      this.valid = base.valid || this.valid;
      this.data = base.data || this.data;
    }
  }
}
