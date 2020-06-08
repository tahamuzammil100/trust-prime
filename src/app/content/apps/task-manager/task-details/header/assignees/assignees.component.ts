import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {TaskManagerService} from './../../../task-manager.service';
import {Task} from './../../../task';
import {Assignee} from './../../../assignee';

@Component({
  selector: 'task-assignees',
  templateUrl: './assignees.component.html'
})
export class AssigneesComponent implements OnInit, OnDestroy {
  @Input() task: Task;
  assignees: Assignee[] = [];
  onAssigneesChanged: Subscription;

  constructor(private tasksService: TaskManagerService) { }

  ngOnInit() {
    // Subscribe to update assignees on changes
    this.onAssigneesChanged =
      this.tasksService.onAssigneesChanged
        .subscribe(assignees => {
          this.assignees = assignees;
        });
  }

  onAssigneeChange(assigneeId) {
    this.task.user_id = assigneeId;
    this.tasksService.updateTask(this.task);
  }

  ngOnDestroy() {
    this.onAssigneesChanged.unsubscribe();
  }

}
