import {Component, OnInit} from '@angular/core';
import {RealStateDashboardService} from './real-state-dashboard.service';

@Component({
  selector: 'app-real-state-dashboard',
  templateUrl: './real-state-dashboard.component.html',
  styleUrls: ['./real-state-dashboard.component.scss']
})
export class RealStateDashboardComponent implements OnInit {
  widgets: any;

  constructor(private dataService: RealStateDashboardService) {
    this.widgets = this.dataService.widgets;
  }

  ngOnInit() {
  }

}
