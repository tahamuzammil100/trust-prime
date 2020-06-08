import {Component, OnInit} from '@angular/core';

interface TableRow {
  id?: number;
  firstName: string;
  lastName: string;
  handle: string;
}

const USERS: TableRow[] = [
  {
    firstName: 'Chris',
    lastName: 'Crowder',
    handle: '@c.crowder'
  },
  {
    firstName: 'Domnic',
    lastName: 'Brown',
    handle: '@dom.brown'
  },
  {
    firstName: 'Jonathan',
    lastName: 'Madano',
    handle: '@john.madano'
  },
  {
    firstName: 'Stella',
    lastName: 'Johnson',
    handle: '@stella.johnson'
  },
  {
    firstName: 'Michael',
    lastName: 'Jacklin',
    handle: '@michael.jack'
  }
];

@Component({
  selector: 'app-basic',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss']
})
export class BasicTablesComponent implements OnInit {
  users = USERS;

  constructor() {
  }

  ngOnInit() {
  }

}
