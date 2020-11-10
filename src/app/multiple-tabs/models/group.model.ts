import { User } from './user.model';

export class Group {
  name: string;
  type: string;
  users: User[];

  constructor(base?: Partial<Group>) {
    if (base) {
      this.name = base.name || this.name;
      this.type = base.type || this.type;
      this.users = base.users ? base.users.map(user => new User(user)) : this.users;
    }
  }
}
