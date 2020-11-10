export class User {
  firstname: string;
  lastname: string;

  constructor(base?: Partial<User>) {
    if (base) {
      this.firstname = base.firstname || this.firstname;
      this.lastname = base.lastname || this.lastname;
    }
  }
}
