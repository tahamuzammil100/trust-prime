import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as pattern from 'patternomaly';
import {ChartjsService} from './chartjs.service';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {
  widgets: any;
  colorsPatterns: Array<any> = [
    {
      backgroundColor: [
        pattern.draw('square', '#ff6384'),
        pattern.draw('square', '#3367d6'),
        pattern.draw('dot', '#FF901F'),
        pattern.draw('diamond', '#cc65fe'),
        pattern.draw('square', '#17becf'),
        pattern.draw('line-vertical', '#ffc658'),
        pattern.draw('triangle', '#59AA2B')
      ]
    }
  ];

  testColors: any[];
  @ViewChild('canva', {static: true}) canva: ElementRef;

  constructor(private chartjsService: ChartjsService) {
    this.widgets = this.chartjsService.widgets;

    // Register the custom chart.js plugin
    this.registerCustomChartJSPlugin();
  }

  ngOnInit() {
    const color = (<any>window).Chart.helpers.color;

    const context: CanvasRenderingContext2D = this.canva.nativeElement.getContext('2d');

    const grad = context.createLinearGradient(0, 0, 230, 0);

    grad.addColorStop(0, color('#163469').alpha(0.9).rgbString());
    grad.addColorStop(1, color('#FE9E15').alpha(0.9).rgbString());

    const grad2 = context.createLinearGradient(0, 0, 230, 0);

    grad2.addColorStop(0, '#fff');
    grad2.addColorStop(1, '#3367d6');

    const grad3 = context.createLinearGradient(500, 0, 100, 0);

    grad3.addColorStop(0, '#fff');
    grad3.addColorStop(1, '#59AA2B');

    this.testColors = [
      {
        backgroundColor: grad,
        borderColor: grad,
        pointBackgroundColor: grad,
        pointBorderColor: grad,
        pointHoverBackgroundColor: grad,
        pointHoverBorderColor: grad,
      },
      {
        backgroundColor: grad2,
        borderColor: grad2,
        pointBackgroundColor: grad2,
        pointBorderColor: grad2,
        pointHoverBackgroundColor: grad2,
        pointHoverBorderColor: grad2,
      },
      {
        backgroundColor: grad3,
        borderColor: grad3,
        pointBackgroundColor: grad3,
        pointBorderColor: grad3,
        pointHoverBackgroundColor: grad3,
        pointHoverBorderColor: grad3,
      },
    ];
  }

  /**
   * Register a custom plugin
   */
  registerCustomChartJSPlugin() {
    (<any>window).Chart.plugins.register({
      beforeDraw: function (chart) {
        const width = chart.chart.width;
        const height = chart.chart.height;

        // To only draw at the end of animation, check for easing === 1
        const ctx = chart.ctx;

        if (chart.chart.options.center_text) {
          const center_text = chart.chart.options.center_text;
          ctx.restore();

          // Draw the text in black, with the specified font
          // ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          const fontSize = 3 + 'rem ';
          const fontStyle = 'normal';
          const fontFamily = 'Roboto, Helvetica Neue, Arial';
          ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          const textX = Math.round((width - ctx.measureText(center_text).width) / 2),
            textY = height / 2;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(center_text, textX, textY);
          ctx.save();
        }
      }
    });
  }

  public randomizeType(event: any): void {
    event.preventDefault();

    this.widgets.dyanamicChart.chart1.chartType = this.widgets.dyanamicChart.chart1.chartType === 'line' ? 'bar' : 'line';
    this.widgets.dyanamicChart.chart2Type = this.widgets.dyanamicChart.chart2Type === 'doughnut' ? 'pie' : 'doughnut';
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
