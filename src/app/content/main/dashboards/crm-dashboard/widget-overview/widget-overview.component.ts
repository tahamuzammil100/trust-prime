import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'widget-overview',
  templateUrl: './widget-overview.component.html',
  styleUrls: ['./widget-overview.component.scss']
})
export class WidgetOverviewComponent implements OnInit {
  @Input() statusReports: any[];
  @Input() stats: any;

  trackingMap: any;

  @Input()
  set map(map: any) {
    map.listeners = [
      {
        event: 'init',
        method: function (event) {
          // get map object
          const map = event.chart;
          map.amLink.classList.add('amcharts-link');
          // map.amLink.remove();

          function // this function creates and returns a new marker element
          createCustomMarker(image) {
            // create holder
            const holder = document.createElement('div');
            holder.className = 'map-marker';
            holder.title = image.title;
            holder.style.position = 'absolute';

            // maybe add a link to it?
            if (undefined !== image.url) {
              holder.onclick = function () {
                window.location.href = image.url;
              };
              holder.className += ' map-clickable';
            }

            // create dot
            const dot = document.createElement('div');
            const dotClass = (image.dotColor) ? ' bg-' + image.dotColor : '';
            const pulseClass = (image.pulseColor) ? ' pulse-' + image.pulseColor : '';
            dot.className = 'dot-shape dot-shape-lg' + dotClass + pulseClass;
            holder.appendChild(dot);

            // append the marker to the map container
            image.chart.chartDiv.appendChild(holder);

            return holder;
          }

          // go through all of the images
          for (let x in map.dataProvider.images) {
            // get MapImage object
            const image = map.dataProvider.images[x];

            // check if it has corresponding HTML element
            if ('undefined' === typeof image.externalElement) {
              image.externalElement = createCustomMarker(image);
            }

            // reposition the element accoridng to coordinates
            const xy = map.coordinatesToStageXY(image.longitude, image.latitude);
            image.externalElement.style.top = xy.y + 'px';
            image.externalElement.style.left = xy.x + 'px';
          }
        }
      }
    ];

    this.trackingMap = map;
  }

  constructor() {
  }

  ngOnInit() {

  }

}
