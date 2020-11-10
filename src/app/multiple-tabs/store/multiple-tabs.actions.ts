import { Action } from '@ngrx/store';
import { MultipleTabsActionTypes } from '../enums/multiple-tabs.action.types';
import { User } from '../models/user.model';
import { Group } from '../models/group.model';
import { Phone } from '../models/phone.model';

export class FetchGroups implements Action {
  readonly type = MultipleTabsActionTypes.FETCH_GROUPS;

  constructor(public groups: Group[]) {
  }
}

export class ClearGroups implements Action {
  readonly type = MultipleTabsActionTypes.CLEAR_GROUPS;
}

export class FetchPhones implements Action {
  readonly type = MultipleTabsActionTypes.FETCH_PHONES;

  constructor(public phones: Phone[]) {
  }
}

export class ClearPhones implements Action {
  readonly type = MultipleTabsActionTypes.CLEAR_PHONES;
}

export class FetchUsers implements Action {
  readonly type = MultipleTabsActionTypes.FETCH_USERS;

  constructor(public users: User[]) {
  }
}

export class ClearUsers implements Action {
  readonly type = MultipleTabsActionTypes.CLEAR_USERS;
}

export type multipleTabsActions =
  | FetchGroups
  | ClearGroups
  | FetchPhones
  | ClearPhones
  | FetchUsers
  | ClearUsers
  ;
