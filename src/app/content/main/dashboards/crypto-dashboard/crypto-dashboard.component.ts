import {Component, OnInit} from '@angular/core';
import {CryptoDashboardService} from './crypto-dashboard.service';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.scss']
})
export class CryptoDashboardComponent implements OnInit {
  widgets: any;

  constructor(private dataService: CryptoDashboardService) {
    this.widgets = this.dataService.widgets;
  }

  ngOnInit() {
    this.widgets.cryptoCards.map((crypto) => {
      crypto.chart.events = {
        draw: (data) => {
          data.element._node.setAttribute('style', 'stroke:' + crypto.chart.color);
        }
      };
    });

    this.widgets.balanceHistory.chart.events = {
      created: (data) => {
        const defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient3',
          x1: 0,
          y1: 1,
          x2: 0,
          y2: 0
        }).elem('stop', {
          offset: 0.3,
          'stop-opacity': '0.4',
          'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
          offset: 1,
          'stop-opacity': '1',
          'stop-color': 'rgba(255, 192, 214, 1)'
        });
      },
      draw: (data) => {
        if (data.type === 'area') {
          data.element._node.setAttribute('style', 'fill:url(' + window.location.href + '#gradient3);fill-opacity:1');
        }

        if (data.type === 'line') {
          data.element._node.setAttribute('style', 'stroke:#FF4081;stroke-width:2px;');
        }
      }
    };
  }

}
