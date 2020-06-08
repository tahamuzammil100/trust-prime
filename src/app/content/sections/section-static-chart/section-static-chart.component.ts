import {Component} from '@angular/core';

const color = (<any>window).Chart.helpers.color;

@Component({
  selector: 'app-section-static-chart',
  templateUrl: './section-static-chart.component.html',
  styleUrls: ['./section-static-chart.component.scss']
})
export class SectionStaticChartComponent {
  days = [
    {name: 'Today', slug: 'today'},
    {name: 'Yesterday', slug: 'yesterday'},
    {name: 'Tomorrow', slug: 'tomorrow'},
  ];
  selectedDay = {name: 'Today', slug: 'today'};
  chart = {
    chartType: 'line',
    labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G', 'Page K', 'Page M', 'Page R', 'Page S', 'Page T'],
    dataSets: {
      today: [
        {
          label: 'Work Status',
          data: [70, 85, 67, 78, 75, 85, 71, 85, 95, 107, 100, 105],
          fill: '-1'
        },
        {
          label: 'Financial Status',
          data: [63, 65, 58, 55, 60, 70, 83, 90, 92, 90, 83, 75]
        },
        {
          label: 'Financial Status',
          data: [78, 79, 67, 62, 68, 73, 75, 78, 82, 87, 93, 100]
        }
      ],
      yesterday: [
        {
          label: 'Work Status',
          data: [70, 85, 67, 78, 75, 85, 71, 85, 95, 107, 100, 105],
          fill: '-1'
        },
        {
          label: 'Financial Status',
          data: [63, 65, 58, 55, 60, 70, 83, 80, 82, 80, 83, 75]
        },
        {
          label: 'Financial Status',
          data: [78, 89, 77, 72, 78, 73, 75, 78, 82, 87, 93, 100]
        }
      ],
      tomorrow: [
        {
          label: 'Work Status',
          data: [70, 85, 67, 78, 75, 85, 71, 85, 95, 107, 100, 105],
          fill: '-1'
        },
        {
          label: 'Financial Status',
          data: [63, 65, 58, 55, 60, 70, 83, 90, 92, 90, 83, 75]
        },
        {
          label: 'Financial Status',
          data: [78, 89, 77, 72, 78, 73, 75, 78, 82, 87, 93, 100]
        }
      ]
    },
    options: {
      responsive: true,
      height: 155,
      legend: {
        display: false
      },
      layout: {
        padding: 0
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    },
    colors: [
      {
        pointRadius: 0,
        backgroundColor: '#52c41a',
        borderWidth: 3,
        borderColor: '#52c41a',
        hoverBorderWidth: 0,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
      },
      {
        pointRadius: 0,
        borderWidth: 0,
        hoverBorderWidth: 0,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        backgroundColor: color('#3f3f91').alpha(0.7).rgbString(),
      },
      {
        pointRadius: 0,
        borderWidth: 0,
        hoverBorderWidth: 0,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        backgroundColor: color('#ec45a0').alpha(0.8).rgbString(),
      }
    ]
  };

  constructor() {
  }

  onClickDay(event: Event, day: any) {
    event.preventDefault();

    this.selectedDay = day;
  }

}
