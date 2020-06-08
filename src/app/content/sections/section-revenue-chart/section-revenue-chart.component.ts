import {Component} from '@angular/core';

@Component({
  selector: 'app-section-revenue-chart',
  templateUrl: './section-revenue-chart.component.html',
  styleUrls: ['./section-revenue-chart.component.scss']
})
export class SectionRevenueChartComponent {
  days = [
    {name: '2016', slug: '2016'},
    {name: '2017', slug: '2017'},
    {name: '2018', slug: '2018'},
    {name: '2019', slug: '2019'}
  ];
  selectedDay = {name: '2019', slug: '2019'};
  chart = {
    chartType: 'line',
    labels: ['', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', ''],
    dataSets: {
      '2016': [
        {
          label: 'Revenue',
          data: [20, 40, 34, 45, 50, 55, 45, 35, 29, 40, 30, 22]
        },
        {
          label: 'Revenue',
          data: [50, 60, 45, 51, 60, 63, 74, 50, 53, 48, 64, 50]
        },
        {
          label: 'Revenue',
          data: [90, 95, 90, 75, 86, 97, 90, 102, 96, 79, 101, 80]
        }
      ],
      '2017': [
        {
          label: 'Revenue',
          data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
        },
        {
          label: 'Revenue',
          data: [50, 60, 45, 51, 60, 63, 74, 50, 53, 48, 64, 50]
        },
        {
          label: 'Revenue',
          data: [90, 85, 90, 75, 86, 92, 75, 85, 88, 79, 101, 80]
        }
      ],
      '2018': [
        {
          label: 'Revenue',
          data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
        },
        {
          label: 'Revenue',
          data: [20, 40, 34, 45, 50, 55, 45, 35, 29, 40, 30, 22]
        },
        {
          label: 'Revenue',
          data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
        }
      ],
      '2019': [
        {
          label: 'Revenue',
          data: [20, 28, 34, 45, 33, 25, 30, 35, 29, 32, 26, 22]
        },
        {
          label: 'Revenue',
          data: [50, 43, 45, 51, 49, 46, 50, 55, 53, 48, 64, 50]
        },
        {
          label: 'Revenue',
          data: [90, 85, 90, 75, 86, 92, 75, 85, 88, 79, 101, 80]
        }
      ]
    },
    options: {
      responsive: true,
      height: 175,
      legend: {
        display: false
      },
      layout: {
        padding: 0
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          display: true
        }],
        yAxes: [{
          display: false
        }]
      }
    },
    colors: [
      {
        pointRadius: 0,
        backgroundColor: '#ffffff',
        borderWidth: 0,
        borderColor: '#ffffff',
        hoverBorderWidth: 0,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
      },
      {
        pointRadius: 0,
        backgroundColor: '#FE9E15',
        borderWidth: 0,
        borderColor: '#FE9E15',
        hoverBorderWidth: 0,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0
      },
      {
        pointRadius: 0,
        backgroundColor: '#038FDE',
        borderWidth: 0,
        borderColor: '#038FDE',
        hoverBorderWidth: 0,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0
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
