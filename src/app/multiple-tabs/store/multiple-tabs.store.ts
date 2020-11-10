import { Injectable } from '@angular/core';
import { GroupsService } from '../services/groups.service';
import { PhonesService } from '../services/phones.service';
import { UsersService } from '../services/users.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { ClearGroups, ClearPhones, ClearUsers, FetchGroups, FetchPhones, FetchUsers } from './multiple-tabs.actions';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { multipleTabsSelector } from './multiple-tabs.selector';
import { Group } from '../models/group.model';
import { Phone } from '../models/phone.model';

@Injectable()
export class MultipleTabsStore {

  constructor(private groupService: GroupsService,
              private phoneService: PhonesService,
              private userService: UsersService,
              private store: Store<AppState>) {
  }

  get users(): Observable<User[]> {
    return this.store.select(multipleTabsSelector.users);
  }

  get groups(): Observable<Group[]> {
    return this.store.select(multipleTabsSelector.groups);
  }

  get phones(): Observable<Phone[]> {
    return this.store.select(multipleTabsSelector.phones);
  }

  async fetchUsers(): Promise<void> {
    const users = await this.userService.findAll().toPromise();
    this.store.dispatch(new FetchUsers(users));
  }

  async fetchGroups(): Promise<void> {
    const groups = await this.groupService.findAll().toPromise();
    this.store.dispatch(new FetchGroups(groups));
  }

  async fetchPhones(): Promise<void> {
    const phones = await this.phoneService.findAll().toPromise();
    this.store.dispatch(new FetchPhones(phones));
  }

  clearUsers(): void {
    this.store.dispatch(new ClearUsers());
  }

  clearGroups(): void {
    this.store.dispatch(new ClearGroups());
  }

  clearPhones(): void {
    this.store.dispatch(new ClearPhones());
  }

}
