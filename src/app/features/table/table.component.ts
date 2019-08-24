import {Component} from '@angular/core';

export interface PeriodicElement {
  stat1: number;
  stat2: number;
  stat3: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {stat1: 1, stat2: 13, stat3: 67},
  {stat1: 6, stat2: 143, stat3: 45},
  {stat1: 34, stat2: 45, stat3: 45},
  {stat1: 12, stat2: 321, stat3: 23},
];


@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['stat1', 'stat2', 'stat3'];
  dataSource = ELEMENT_DATA;
}
