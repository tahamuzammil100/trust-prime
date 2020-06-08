import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgProgressModule} from 'ngx-progressbar';
import {SharedModule} from '@gaxon/modules';
import {RouterModule, Routes} from '@angular/router';

import {AuthSigninComponent} from './signin/auth-signin.component';
import {AuthSignupComponent} from './signup/auth-signup.component';
import {AuthForgotPasswordComponent} from './forgot-password/auth-forgot-password.component';

const frontendRoutes: Routes = [
  {
    path: 'signin',
    component: AuthSigninComponent
  },
  {
    path: 'signup',
    component: AuthSignupComponent
  },
  {
    path: 'forgot-password',
    component: AuthForgotPasswordComponent
  }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgProgressModule,
        RouterModule.forChild(frontendRoutes)
    ],
    declarations: [
        AuthSignupComponent,
        AuthSigninComponent,
        AuthForgotPasswordComponent
    ]
})
export class AuthPageModule {
}
