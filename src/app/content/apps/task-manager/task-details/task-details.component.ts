import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

import {TaskManagerService} from './../task-manager.service';
import {Project} from './../project';
import {Task} from './../task';
import {Assignee} from './../assignee';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html'
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__container';

  projects: Project[];
  currentUser: Assignee;
  currentTask: Task;
  labels: any[] = [];
  taskForm: FormGroup;

  onProjectsChanged: Subscription;
  onCurrentTaskChanged: Subscription;
  onLabelsChanged: Subscription;
  onFormChange: any;
  editTitle = false;

  constructor(private tasksService: TaskManagerService, private formBuilder: FormBuilder) {
    this.currentUser = this.tasksService.currentUser;
  }

  ngOnInit() {
    // Subscribe to update projects on changes
    this.onProjectsChanged =
      this.tasksService.onProjectsChanged
        .subscribe(projects => {
          this.projects = projects;
        });

    // Subscribe to update current task on changes
    this.onCurrentTaskChanged =
      this.tasksService.onCurrentTaskChanged
        .subscribe(task => {
          if (task) {
            this.currentTask = task;

            this.taskForm = this.createTaskForm();

            this.onFormChange = this.taskForm.valueChanges.pipe(
              debounceTime(500),
              distinctUntilChanged()
            ).subscribe((data: Task) => {
              this.currentTask = data;
              this.tasksService.updateTask(data);
            });
          }
        });

    // Subscribe to update labels on changes
    this.onLabelsChanged =
      this.tasksService.onLabelsChanged
        .subscribe(labels => {
          this.labels = labels;
        });
  }

  /**
   * Create form for Task
   */
  createTaskForm() {
    return this.formBuilder.group({
      id: [this.currentTask.id],
      title: [this.currentTask.title],
      content: [this.currentTask.content],
      completed: [this.currentTask.completed],
      labels: [this.currentTask.labels],
      created: [this.currentTask.created],
      dueDate: [this.currentTask.dueDate],
      user_id: [this.currentTask.user_id],
      project_id: [this.currentTask.project_id],
      deleted: [this.currentTask.deleted]
    });
  }

  ngOnDestroy() {
    this.onProjectsChanged.unsubscribe();
    this.onCurrentTaskChanged.unsubscribe();
    this.onLabelsChanged.unsubscribe();

    if (this.onFormChange) {
      this.onFormChange.unsubscribe();
    }
  }

}
