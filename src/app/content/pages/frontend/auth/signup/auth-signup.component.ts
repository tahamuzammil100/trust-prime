import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html'
})
export class AuthSignupComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container';

  constructor() {
  }

  ngOnInit() {
  }

}
