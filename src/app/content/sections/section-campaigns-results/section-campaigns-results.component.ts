import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-campaigns-results',
  templateUrl: './section-campaigns-results.component.html',
  styleUrls: ['./section-campaigns-results.component.scss']
})
export class SectionCampaignsResultsComponent implements OnInit {
  @Input() campaigns: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
