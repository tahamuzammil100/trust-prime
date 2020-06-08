import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-tickets',
  templateUrl: './section-tickets.component.html',
  styleUrls: ['./section-tickets.component.scss']
})
export class SectionTicketsComponent implements OnInit {
  @Input() ticketStatus: any[];

  activeTab = '';
  filteredTickets: any[];
  private _tickets: any[];

  @Input()
  set tickets(tickets: any[]) {
    this._tickets = tickets;

    this.filteredTickets = this._tickets;
  }

  ngOnInit() {
  }

  onTabChange(event, tab: string) {
    event.preventDefault();

    this.activeTab = tab;
    if (this.activeTab === '') {
      this.filteredTickets = this._tickets;
    } else {
      this.filteredTickets = this._tickets.filter((ticket) => {
        return ticket.type === this.activeTab;
      });
    }
  }

}
