import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-campaign-stats',
  templateUrl: './widget-campaign-stats.component.html',
  styleUrls: ['./widget-campaign-stats.component.scss']
})
export class WidgetCampaignStatsComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
