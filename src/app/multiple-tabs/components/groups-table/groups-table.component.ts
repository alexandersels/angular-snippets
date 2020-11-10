import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Group } from '../../models/group.model';

@Component({
  selector: 'app-groups-table',
  templateUrl: './groups-table.component.html',
  styleUrls: ['./groups-table.component.scss']
})
export class GroupsTableComponent implements AfterViewInit, OnInit {

  @Input()
  groups: Group[];

  displayColumns: string[] = ['name', 'type'];
  datasource: MatTableDataSource<Group>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    this.datasource = new MatTableDataSource<Group>();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit() {
    this.datasource.data = this.groups;
  }
}
