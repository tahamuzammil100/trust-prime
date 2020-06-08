import {Component, OnInit} from '@angular/core';
import {WidgetsService} from '../widgets.service';

@Component({
  selector: 'app-modern',
  templateUrl: './modern-widgets.component.html',
  styleUrls: ['./modern-widgets.component.scss']
})
export class ModernWidgetsComponent implements OnInit {
  widgets: any;

  constructor(private widgetService: WidgetsService) {
    this.widgets = this.widgetService.widgets;
  }

  ngOnInit() {
  }
}
