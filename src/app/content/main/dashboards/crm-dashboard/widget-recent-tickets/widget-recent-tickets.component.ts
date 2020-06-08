import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-recent-tickets',
  templateUrl: './widget-recent-tickets.component.html',
  styleUrls: ['./widget-recent-tickets.component.scss']
})
export class WidgetRecentTicketsComponent implements OnInit {
  @Input() tickets: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
