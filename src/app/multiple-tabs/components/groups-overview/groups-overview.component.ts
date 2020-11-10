import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-groups-overview',
  templateUrl: './groups-overview.component.html',
  styleUrls: ['./groups-overview.component.scss']
})
export class GroupsOverviewComponent implements OnInit, OnDestroy {

  @Input()
  groups: Group[];

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
