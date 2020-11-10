import { Group } from '../models/group.model';
import { Phone } from '../models/phone.model';
import { User } from '../models/user.model';

export interface MultipleTabsState {
  groups: Group[];
  phones: Phone[];
  users: User[];
}

export const initialMultipleTabsState: MultipleTabsState = {
  groups: null,
  phones: null,
  users: null,
};
