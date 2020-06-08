import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-pricing-plans',
  templateUrl: './section-pricing-plans.component.html',
  styleUrls: ['./section-pricing-plans.component.scss']
})
export class SectionPricingPlansComponent implements OnInit {
  @Input() pricingPlans: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
