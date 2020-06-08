import { Component, OnDestroy, OnInit } from '@angular/core';
import { CrmDashboardService } from './crm-dashboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: ['./crm-dashboard.component.scss']
})
export class CrmDashboardComponent implements OnInit, OnDestroy {
  widgets: any;
  tasks: any[];

  onTasksChanged: Subscription;

  constructor(
    private dataService: CrmDashboardService
  ) {
    this.widgets = this.dataService.widgets;

    this.onTasksChanged = this.dataService.onTasksChanged.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onTasksChanged.unsubscribe();
  }

}
