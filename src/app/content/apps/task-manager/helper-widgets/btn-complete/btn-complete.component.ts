import {Component, Input, OnInit} from '@angular/core';
import {TaskManagerService} from './../../task-manager.service';
import {Task} from './../../task';

@Component({
  selector: 'btn-complete',
  templateUrl: './btn-complete.component.html'
})
export class BtnCompleteComponent implements OnInit {
  @Input() task: Task;
  @Input() display = 'checkbox';

  constructor(private tasksService: TaskManagerService) { }

  ngOnInit() {
  }

  onToggleClick() {
    this.task.completed = !this.task.completed;
    this.tasksService.updateTask(this.task);
  }

  /**
   * On Toggle complete status change
   */
  onToggleChange() {
    this.tasksService.updateTask(this.task);
  }

}
