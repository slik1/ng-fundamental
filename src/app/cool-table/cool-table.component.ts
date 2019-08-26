import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatIconModule} from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * @title Table
 */
@Component({
  selector: 'app-cool-table',
  styleUrls: ['cool-table.component.css'],
  templateUrl: 'cool-table.component.html',
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CoolTableComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'num_of_programs', 'num_of_blocks', 'total_run_time', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  num_of_programs: number;
  num_of_blocks: number;
  total_run_time: string;
  station_cycle_time_hours: string;
  station_cycle_time_minutes: string;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '01 - Front Yard', num_of_programs: 3, num_of_blocks: 0, total_run_time: '00:45:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '20'},
  {position: 2, name: '02 - Shrubs', num_of_programs: 14, num_of_blocks: 0, total_run_time: '00:32:00', station_cycle_time_hours: '01', station_cycle_time_minutes: '15'},
  {position: 3, name: '03 - Rediculously long name', num_of_programs: 1, num_of_blocks: 64, total_run_time: '04:20:00', station_cycle_time_hours: '04', station_cycle_time_minutes: '20'},
  {position: 4, name: '04 - Station 4', num_of_programs: 3, num_of_blocks: 0, total_run_time: '00:15:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '15'},
  {position: 5, name: '05 - Station 5', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 6, name: '06 - Station 6', num_of_programs: 7, num_of_blocks: 0, total_run_time: '00:50:00', station_cycle_time_hours: '02', station_cycle_time_minutes: '11'},
  {position: 7, name: '07 - Station 7', num_of_programs: 3, num_of_blocks: 0, total_run_time: '00:20:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '20'},
  {position: 8, name: '08 - Station 8', num_of_programs: 1, num_of_blocks: 0, total_run_time: '00:10:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '10'},
  {position: 9, name: '09 - Station 9', num_of_programs: 1, num_of_blocks: 0, total_run_time: '00:10:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '10'},
  {position: 10, name: '10 - Station 10', num_of_programs: 6, num_of_blocks: 0, total_run_time: '01:05:00', station_cycle_time_hours: '01', station_cycle_time_minutes: '05'},
  {position: 11, name: '11 - Station 11', num_of_programs: 0, num_of_blocks: 3, total_run_time: '00:15:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '15'},
  {position: 12, name: '12 - Station 12', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 13, name: '13 - Station 13', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 14, name: '14 - Station 14', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 15, name: '15 - Station 15', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 16, name: '16 - Station 16', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 17, name: '17 - Station 17', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 18, name: '18 - Station 18', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 19, name: '19 - Station 19', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
  {position: 20, name: '20 - Station 20', num_of_programs: 0, num_of_blocks: 0, total_run_time: '00:00:00', station_cycle_time_hours: '00', station_cycle_time_minutes: '00'},
];

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: '01 - Front Yard', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: '02 - Shrubs', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: '03 - Rediculously long name', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */