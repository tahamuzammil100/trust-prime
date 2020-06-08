import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-leads',
  templateUrl: './section-leads.component.html',
  styleUrls: ['./section-leads.component.scss']
})
export class SectionLeadsComponent implements OnInit {
  @Input() cardTitle: any;
  @Input() data: any;
  @Input() countries: any;
  @Input() monthlyLead: any;

  leadNumbers: any;
  activeView = 'smart-phone';
  barChartOptions: any;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() { }

  ngOnInit() {
    this.leadNumbers = this.data.mobile;
    this.barChartOptions = this.monthlyLead.chart.options;
    this.barChartOptions.tooltips = {
      callbacks: {
        title: ((tooltipItem) => {
          const tindex = tooltipItem[0].index;
          return this.months[tindex];
        })
      }
    };
  }

  onToggleView() {
    if(this.activeView === 'smart-phone') {
      this.activeView = 'desktop';
      this.leadNumbers = this.data.desktop;
    } else {
      this.activeView = 'smart-phone';
      this.leadNumbers = this.data.mobile;
    }
  }

}
