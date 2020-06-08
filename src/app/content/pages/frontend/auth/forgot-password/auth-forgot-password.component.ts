import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './auth-forgot-password.component.html'
})
export class AuthForgotPasswordComponent implements OnInit {
  @HostBinding('class') classlist = 'dt-login--container dt-forgot-password';

  constructor() {
  }

  ngOnInit() {
  }

}
