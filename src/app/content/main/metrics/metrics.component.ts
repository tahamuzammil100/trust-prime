import { Component, OnInit } from '@angular/core';
import { MetricsService } from './metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss']
})
export class MetricsComponent implements OnInit {
  widgets: any;
  simpleWidgets: any[];
  trendingCards: any[];

  constructor(
    private metrics: MetricsService
  ) {
    this.widgets = this.metrics.widgets;
    this.simpleWidgets = this.metrics.simpleWidgets;
    this.trendingCards = this.metrics.trendingCards;
  }

  ngOnInit() {
  }

}
