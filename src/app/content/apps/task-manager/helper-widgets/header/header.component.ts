import {Component, OnDestroy, HostBinding, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TaskManagerService} from './../../task-manager.service';
import {Task} from './../../task';

@Component({
  selector: 'setion-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__header';
  @Input() title: string;
  @Input() isTask = false;

  currentTask: Task;
  onCurrentTaskChanged: Subscription;

  constructor(private tasksService: TaskManagerService) {
  }

  ngOnInit() {
    // Subscribe to update current task on changes
    this.onCurrentTaskChanged =
      this.tasksService.onCurrentTaskChanged
        .subscribe(task => {
          if (task) {
            this.currentTask = task;
            this.isTask = true;
          } else {
            this.isTask = false;
          }
        });
  }

  goToBack(event) {
    event.preventDefault();

    this.tasksService.setCurrentTask(null);
  }

  ngOnDestroy() {
    this.onCurrentTaskChanged.unsubscribe();
  }

}
