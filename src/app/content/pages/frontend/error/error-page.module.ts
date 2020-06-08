import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgProgressModule} from 'ngx-progressbar';
import {SharedModule} from '@gaxon/modules';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServerErrorComponent} from './server-error/server-error.component';

const frontendRoutes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '500',
    component: ServerErrorComponent
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
    PageNotFoundComponent,
    ServerErrorComponent
  ]
})
export class ErrorPageModule {
}
