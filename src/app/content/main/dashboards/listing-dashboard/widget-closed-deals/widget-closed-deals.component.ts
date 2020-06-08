import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-closed-deals',
  templateUrl: './widget-closed-deals.component.html',
  styleUrls: ['./widget-closed-deals.component.scss']
})
export class WidgetClosedDealsComponent implements OnInit {
  @Input() data: any;
  @Input() chart: any;

  events = {
    created: (data) => {
      const defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient-0',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
      }).elem('stop', {
        offset: 0,
        'stop-opacity': '1',
        'stop-color': 'rgba(255, 255, 255, 1)'
      }).parent().elem('stop', {
        offset: 1,
        'stop-opacity': '0.8',
        'stop-color': 'rgba(226, 218, 255, 1)'
      });

      defs.elem('linearGradient', {
        id: 'gradient-1',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
      }).elem('stop', {
        offset: 0.3,
        'stop-opacity': '1',
        'stop-color': 'rgba(255, 255, 255, 1)'
      }).parent().elem('stop', {
        offset: 1,
        'stop-opacity': '0.5',
        'stop-color': 'rgba(252, 217, 228, 1)'
      });
    },
    draw(data: any): void {
      const colors = ['#512DA8', '#FF4081'];
      if (data.type === 'area') {
        data.element._node.setAttribute('style', 'fill:url(' + window.location.href + '#gradient-' + data.index + ');fill-opacity:0.5');
      }

      if (data.type === 'line') {
        data.element._node.setAttribute('style', 'stroke:' + colors[data.index] + ';stroke-width:1px;');
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
