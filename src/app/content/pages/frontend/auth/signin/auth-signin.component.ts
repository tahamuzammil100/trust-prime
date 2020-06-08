import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html'
})
export class AuthSigninComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container';

  constructor() {
  }

  ngOnInit() {
  }

}
