import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-phones-table',
  templateUrl: './phones-table.component.html',
  styleUrls: ['./phones-table.component.scss']
})
export class PhonesTableComponent implements AfterViewInit, OnInit {

  @Input()
  phones: Phone[];

  displayColumns: string[] = ['number'];
  datasource: MatTableDataSource<Phone>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    this.datasource = new MatTableDataSource<Phone>();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit() {
    this.datasource.data = this.phones;
  }
}
