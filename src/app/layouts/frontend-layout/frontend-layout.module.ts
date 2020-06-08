import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@gaxon/modules';

import {PagesRoutingModule} from './pages-routing.module';
import {NavigationModule} from '@gaxon/components/navigation/navigation.module';
import {FrontendLayoutComponent} from '@app/layouts/frontend-layout/frontend-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PagesRoutingModule,
    NavigationModule
  ],
  declarations: [
    FrontendLayoutComponent
  ],
  exports: []
})
export class FrontendLayoutModule {
}
