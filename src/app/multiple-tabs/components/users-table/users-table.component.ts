import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements AfterViewInit, OnInit {

  @Input()
  users: User[];

  displayColumns: string[] = ['firstname', 'lastname'];
  datasource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    this.datasource = new MatTableDataSource<User>();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit() {
    this.datasource.data = this.users;
  }
}
