import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ListingDashboardService} from './listing-dashboard.service';

@Component({
  selector: 'app-saas-dashboard',
  templateUrl: './listing-dashboard.component.html',
  styleUrls: ['./listing-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListingDashboardComponent implements OnInit {
  widgets: any;
  activities: any[];

  constructor(private dataService: ListingDashboardService) {
    this.widgets = this.dataService.widgets;
    this.activities = this.dataService.activities;
  }

  ngOnInit() {
  }
}
