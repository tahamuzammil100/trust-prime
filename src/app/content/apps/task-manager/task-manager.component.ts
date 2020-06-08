import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {TaskManagerService} from './task-manager.service';
import {Task} from './task';
import {Project} from './project';
import {DrawerService} from './../drawer.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, OnDestroy {
  currentProject: Project;
  currentTask: Task;
  drawer: any;

  onCurrentProjectChanged: Subscription;
  onCurrentTaskChanged: Subscription;
  onDrawerChanged: Subscription;

  constructor(private tasksService: TaskManagerService, private drawerService: DrawerService) {
    this.onDrawerChanged = this.drawerService.onDrawerChanged.subscribe((drawer) => {
      this.drawer = drawer;
    });
  }

  ngOnInit() {
    // Subscribe to update current project on changes
    this.onCurrentProjectChanged =
      this.tasksService.onCurrentProjectChanged
        .subscribe(project => {
          if (project) {
            this.currentProject = project;
          } else {
            this.currentProject = null;
          }
        });

    // Subscribe to update current task on changes
    this.onCurrentTaskChanged =
      this.tasksService.onCurrentTaskChanged
        .subscribe(task => {
          if (task) {
            this.currentTask = task;
          } else {
            this.currentTask = null;
          }

        });
  }

  /**
   * Close Drawer
   * @param event
   */
  closeDrawer(event) {
    event.preventDefault();

    this.drawer.isOpen = false;
    this.drawerService.update(this.drawer);
  }

  ngOnDestroy() {
    this.onCurrentProjectChanged.unsubscribe();
    this.onCurrentTaskChanged.unsubscribe();
    this.onDrawerChanged.unsubscribe();
  }

}
