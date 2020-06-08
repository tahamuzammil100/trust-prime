import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {TaskManagerService} from './../../../task-manager.service';
import {Task} from './../../../task';

@Component({
  selector: 'task-labels',
  templateUrl: './labels.component.html'
})
export class LabelsComponent implements OnInit, OnDestroy {
  @Input() task: Task;
  labels: any[] = [];
  onLabelsChanged: Subscription;

  constructor(private tasksService: TaskManagerService) { }

  ngOnInit() {
    // Subscribe to update labels on changes
    this.onLabelsChanged =
      this.tasksService.onLabelsChanged
        .subscribe(labels => {
          this.labels = labels;
        });
  }

  hasLabel(labelId) {
    return this.tasksService.hasLabel(labelId, this.task);
  }

  onToggleLabel(labelId) {
    this.tasksService.toggleLabel(labelId, this.task);
  }

  ngOnDestroy() {
    this.onLabelsChanged.unsubscribe();
  }

}
