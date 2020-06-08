import {Component, OnDestroy, OnInit} from '@angular/core';
import {WidgetsService} from '../widgets.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-widgets',
  templateUrl: './classic-widgets.component.html',
  styleUrls: ['./classic-widgets.component.scss']
})
export class ClassicWidgetsComponent implements OnInit, OnDestroy {
  widgets: any;
  tasks: any[];

  onTasksChanged: Subscription;

  constructor(private widgetService: WidgetsService) {
    this.widgets = this.widgetService.widgets;

    this.onTasksChanged = this.widgetService.onTasksChanged.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onTasksChanged.unsubscribe();
  }

}
