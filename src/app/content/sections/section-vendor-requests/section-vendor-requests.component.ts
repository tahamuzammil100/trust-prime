import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-vendor-requests',
  templateUrl: './section-vendor-requests.component.html',
  styleUrls: ['./section-vendor-requests.component.scss']
})
export class SectionVendorRequestsComponent implements OnInit {
  @Input() vendorRequests: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
