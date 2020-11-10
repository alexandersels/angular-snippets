import { Component, OnInit } from '@angular/core';
import { MultipleTabsStore } from '../store/multiple-tabs.store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Group } from '../models/group.model';
import { Phone } from '../models/phone.model';

@Component({
  selector: 'app-multiple-tabs-page',
  templateUrl: './multiple-tabs-page.component.html',
  styleUrls: ['./multiple-tabs-page.component.scss']
})
export class MultipleTabsPageComponent implements OnInit {

  users$: Observable<User[]>;
  groups$: Observable<Group[]>;
  phones$: Observable<Phone[]>;

  constructor(private multipleTabsStore: MultipleTabsStore) {
  }

  ngOnInit() {
    this.users$ = this.multipleTabsStore.users;
    this.groups$ = this.multipleTabsStore.groups;
    this.phones$ = this.multipleTabsStore.phones;

  }

  onGroupsInitialised(): void {
    this.multipleTabsStore.fetchGroups();
  }

  onGroupsDestroyed(): void {
    this.multipleTabsStore.clearGroups();

  }

  onPhonesInitialised(): void {
    this.multipleTabsStore.fetchPhones();

  }

  onPhonesDestroyed(): void {
    this.multipleTabsStore.clearPhones();

  }

  onUsersInitialised(): void {
    this.multipleTabsStore.fetchUsers();

  }

  onUsersDestroyed(): void {
    this.multipleTabsStore.clearUsers();

  }

}
