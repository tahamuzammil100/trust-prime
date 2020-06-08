import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-page--container';

  constructor() {
  }

  ngOnInit() {
  }

}
