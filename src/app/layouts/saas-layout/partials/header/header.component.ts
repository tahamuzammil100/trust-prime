import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-header';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
