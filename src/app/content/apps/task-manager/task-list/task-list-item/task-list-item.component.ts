import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskManagerService} from './../../task-manager.service';
import {Subscription} from 'rxjs';
import {Assignee} from './../../assignee';
import {Task} from './../../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__list-item';
  @HostBinding('class.completed') completed: boolean;

  @Input() task: Task;
  assignees: Assignee[] = [];
  labels: any[] = [];

  onAssigneesChanged: Subscription;
  onLabelsChanged: Subscription;

  constructor(private tasksService: TaskManagerService) {
  }

  ngOnInit() {
    this.completed = this.task.completed;

    // Subscribe to update assignees on changes
    this.onAssigneesChanged =
      this.tasksService.onAssigneesChanged
        .subscribe(assignees => {
          this.assignees = assignees;
        });

    // Subscribe to update labels on changes
    this.onLabelsChanged =
      this.tasksService.onLabelsChanged
        .subscribe(labels => {
          this.labels = labels;
        });
  }

  /**
   * On Click Task
   * @param event
   * @param taskId
   */
  onClickTask(event, taskId) {
    event.preventDefault();

    // Set current Task
    this.tasksService.setCurrentTask(taskId);
  }

  ngOnDestroy() {
    this.onLabelsChanged.unsubscribe();
    this.onAssigneesChanged.unsubscribe();
  }

}
