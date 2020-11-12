export class FormData {
  onTheFlyPhone: string;
  upFrontPhone: string;

  constructor(base?: Partial<FormData>) {
    if (base) {
      this.onTheFlyPhone = base.onTheFlyPhone || this.onTheFlyPhone;
      this.upFrontPhone = base.upFrontPhone || this.upFrontPhone;
    }
  }
}
