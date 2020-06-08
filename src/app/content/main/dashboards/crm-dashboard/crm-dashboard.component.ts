import { Component, OnDestroy, OnInit } from '@angular/core';
import { CrmDashboardService } from './crm-dashboard.service';
import { Subscription } from 'rxjs';
import { MetricsService } from '../../metrics/metrics.service';
import { WidgetsService } from '../../widgets/widgets.service';

@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: ['./crm-dashboard.component.scss']
})
export class CrmDashboardComponent implements OnInit, OnDestroy {
  widgets: any;
  topCards: any;
  tasks: any[];

  analyticsCards = [
    {
      title: 'Today\'s Temperature',
      description: 'Last update on 08:30 AM',
      icon: {
        name: 'influence',
        colorClasses: 'bg-primary text-primary'
      },
      number: '32 C',
      percent: '2',
      positiveGrowth: true
    },
    {
      title: 'Weather Today',
      description: 'Mostly Calm and Windy',
      icon: {
        name: 'ripple',
        colorClasses: 'bg-success text-success'
      },
      number: '21',
      percent: '1',
      positiveGrowth: true
    },
    {
      title: 'Total Attendance',
      description: 'Just updated',
      icon: {
        name: 'customer',
        colorClasses: 'bg-secondary text-secondary'
      },
      number: '508',
      percent: '5',
      positiveGrowth: false
    },
    {
      title: 'Issues Today',
      description: 'Last update 30 Min ago',
      icon: {
        name: 'question-circle',
        colorClasses: 'bg-orange text-orange'
      },
      number: '312',
      percent: '11',
      positiveGrowth: true
    }
  ];


  onTasksChanged: Subscription;

  constructor(
    private dataService: CrmDashboardService,
    private widgetService: WidgetsService
  ) {
    this.widgets = this.dataService.widgets;
    this.topCards = this.widgetService.widgets;


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
