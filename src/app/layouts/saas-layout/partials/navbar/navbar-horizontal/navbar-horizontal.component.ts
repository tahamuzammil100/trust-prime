import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.scss']
})
export class NavbarHorizontalComponent implements OnInit {
  @HostBinding('class') classNames = 'dt-header__bottom d-none d-md-block';

  constructor() {
  }

  ngOnInit() {
  }

}
