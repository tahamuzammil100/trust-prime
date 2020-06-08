import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html'
})
export class ServerErrorComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-page--container';

  constructor() {
  }

  ngOnInit() {
  }

}
