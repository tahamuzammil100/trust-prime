import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-pricing-updates',
  templateUrl: './section-pricing-updates.component.html',
  styleUrls: ['./section-pricing-updates.component.scss']
})
export class SectionPricingUpdatesComponent implements OnInit {
  @Input() data: any[];

  constructor() { }

  ngOnInit() {
  }

}
