import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-increment-users',
  templateUrl: './widget-increment-users.component.html',
  styleUrls: ['./widget-increment-users.component.scss']
})
export class WidgetIncrementUsersComponent implements OnInit {
  @Input() widget: any;

  constructor() { }

  ngOnInit() {
  }

}
