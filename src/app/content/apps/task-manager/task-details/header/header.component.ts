import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Task} from './../../task';

@Component({
  selector: 'task-header',
  templateUrl: './header.component.html'
})
export class TaskHeaderComponent implements OnInit {
  @HostBinding('class') classlist = 'd-flex flex-wrap align-items-center mb-5';
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
