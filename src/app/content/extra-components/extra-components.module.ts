import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ToastContainerModule} from 'ngx-toastr';

import {SweetAlertsComponent} from './sweet-alerts/sweet-alerts.component';
import {NotificationsComponent} from './notifications/notifications.component';

const routes: Routes = [
  {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule'
  },
  {
    path: 'pickers',
    loadChildren: './pickers/pickers.module#PickersModule'
  },
  {
    path: 'sweet-alerts',
    component: SweetAlertsComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    ToastContainerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SweetAlertsComponent,
    NotificationsComponent
  ]
})
export class ExtraComponentsModule {
}
