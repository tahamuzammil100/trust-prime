import {Component, Input, OnInit} from '@angular/core';
import {TaskManagerService} from './../../../task-manager.service';
import {Task} from './../../../task';

@Component({
  selector: 'task-date',
  templateUrl: './date.component.html'
})
export class DateComponent implements OnInit {
  @Input() task: Task;

  constructor(private tasksService: TaskManagerService) { }

  ngOnInit() {
  }

  onDuedateChange() {
    this.tasksService.updateTask(this.task);
  }

}
