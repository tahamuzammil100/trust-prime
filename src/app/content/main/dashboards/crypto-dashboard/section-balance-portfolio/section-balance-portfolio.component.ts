import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'section-balance-portfolio',
  templateUrl: './section-balance-portfolio.component.html',
  styleUrls: ['./section-balance-portfolio.component.scss']
})
export class SectionBalancePortfolioComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
