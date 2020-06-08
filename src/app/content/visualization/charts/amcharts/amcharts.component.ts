import {Component, OnInit} from '@angular/core';
import {AmchartsService} from './amcharts.service';

@Component({
  selector: 'app-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.scss']
})
export class AmchartsComponent implements OnInit {
  charts: any;

  constructor(private amchartService: AmchartsService) {
    this.charts = this.amchartService.charts;
  }

  ngOnInit() {
    this.charts.animatedPieChart.options.listeners = [
      {
        event: 'init',
        method: function (event) {
          // get map object
          const chart = event.chart;
          let currentYear = chart.activeYear;

          function getCurrentData() {
            const data = chart.inputData[currentYear];
            currentYear++;
            if (currentYear > 2014) {
              currentYear = 1995;
            }

            return data;
          }

          function loop() {
            chart.allLabels[0].text = currentYear;
            const data = getCurrentData();
            chart.animateData(data, {
              duration: 1000,
              complete: function () {
                setTimeout(loop, 3000);
              }
            });
          }

          loop();
        }
      }
    ];
  }
}
