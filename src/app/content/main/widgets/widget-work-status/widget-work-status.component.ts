import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-work-status',
  templateUrl: './widget-work-status.component.html'
})
export class WidgetWorkStatusComponent implements OnInit {
  @Input() data: any;

  events = {
    created(data: any): void {
      const defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'ws-gradient',
        x1: 0,
        y1: 1,
        x2: 0,
        y2: 0
      }).elem('stop', {
        offset: 0.3,
        'stop-opacity': '0.8',
        'stop-color': 'rgba(255, 255, 255, 1)'
      }).parent().elem('stop', {
        offset: 1,
        'stop-opacity': '1',
        'stop-color': 'rgba(181, 164, 241, 1)'
      });
    },
    draw(data: any): void {
      if (data.type === 'area') {
        data.element._node.setAttribute('style', 'fill:url(' + window.location.href + '#ws-gradient);fill-opacity:0.8');
      }

      if (data.type === 'line') {
        data.element._node.setAttribute('style', 'stroke:#512DA8;stroke-width:1px;');
      }
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
