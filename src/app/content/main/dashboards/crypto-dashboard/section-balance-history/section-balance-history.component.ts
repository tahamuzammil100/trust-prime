import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'section-balance-history',
  templateUrl: './section-balance-history.component.html',
  styleUrls: ['./section-balance-history.component.scss']
})
export class SectionBalanceHistoryComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }

}
