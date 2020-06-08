import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-support-tickets',
  templateUrl: './section-support-tickets.component.html',
  styleUrls: ['./section-support-tickets.component.scss']
})
export class SectionSupportTicketsComponent implements OnInit {
  @Input() supportTickets: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
