import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users-overview',
  templateUrl: './users-overview.component.html',
  styleUrls: ['./users-overview.component.scss']
})
export class UsersOverviewComponent implements OnInit, OnDestroy {

  @Input()
  users: User[];

  @Output()
  initialised = new EventEmitter();

  @Output()
  destroyed = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.initialised.emit();
  }

  ngOnDestroy() {
    this.destroyed.emit();
  }
}
