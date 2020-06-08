import {Component, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {TaskManagerService} from './../task-manager.service';
import {Section} from './../section';
import {Task} from './../task';
import {Project} from './../project';
import {PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-module__container';
  newSection: Section;
  sections: Section[] = [];
  tasks: Task[] = [];
  currentProject: Project;

  module_title = 'Dashboard';

  onTasksChanged: Subscription;
  onCurrentProjectChanged: Subscription;
  @ViewChild(PerfectScrollbarDirective, {static: false}) directiveRef?: PerfectScrollbarDirective;

  constructor(private tasksService: TaskManagerService) {
  }

  ngOnInit() {
    // Subscribe to update sections on changes
    this.onTasksChanged =
      this.tasksService.onTasksChanged
        .subscribe(tasks => {
          this.tasks = tasks;
          this.sections = [];

          if (this.currentProject) {
            this.setSections();
          } else {
            this.sections.push({title: '', tasks: this.tasks});
          }

          setTimeout(() => {
            this.scrollToBottom();
          }, 300);
        });

    // Subscribe to update current project on changes
    this.onCurrentProjectChanged =
      this.tasksService.onCurrentProjectChanged
        .subscribe(project => {
          if (project) {
            this.currentProject = project;
            this.module_title = this.currentProject.title;
            this.setSections();
          } else {
            this.currentProject = null;
          }
        });
  }

  setSections() {
    this.sections = [];
    this.newSection = {
      title: '',
      tasks: []
    };
    this.sections.push(this.newSection);
    const assignedToSections = [];

    this.currentProject.sections.forEach(row => {
      this.newSection = {
        title: row.title,
        tasks: []
      };

      this.newSection.tasks = this.tasks.filter(task => {
        if (row.tasks.indexOf(task.id) !== -1) {
          assignedToSections.push(task.id);
          return true;
        }
        return false;
      });

      this.sections.push(this.newSection);
    });

    this.sections[0].tasks = this.tasks.filter(task => {
      if (assignedToSections.indexOf(task.id) !== -1) {
        return false;
      }
      return true;
    });
  }

  scrollToBottom(): void {
    if (this.directiveRef) {
      this.directiveRef.update();
      this.directiveRef.scrollToBottom();
    }
  }

  ngOnDestroy() {
    this.onTasksChanged.unsubscribe();
    this.onCurrentProjectChanged.unsubscribe();
  }

}
