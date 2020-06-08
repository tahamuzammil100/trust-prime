import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {SharedModule} from '@gaxon/modules';
import {SearchBoxModule} from '@gaxon/components';
import {NavigationModule} from '@gaxon/components/navigation/navigation.module';
import {PagesRoutingModule} from './pages-routing.module';

import {IntranetLayoutComponent} from './intranet-layout.component';
import {HeaderComponent} from './partials/header/header.component';
import {MessagesComponent} from './partials/header/messages/messages.component';
import {NotificationsComponent} from './partials/header/notifications/notifications.component';
import {AppsComponent} from './partials/header/apps/apps.component';
import {NavbarVerticalComponent} from './partials/navbar/navbar-vertical/navbar-vertical.component';
import {FooterComponent} from './partials/footer/footer.component';
import {CustomizerComponent} from './partials/customizer/customizer.component';
import {DrawerComponent} from './partials/drawer/drawer.component';
import {DrawerNotificationsComponent} from './partials/drawer/notifications/notifications.component';
import {DrawerSearchComponent} from './partials/drawer/search/search.component';
import {DrawerMessagesComponent} from './partials/drawer/messages/messages.component';

import {DrawerService} from './drawer.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    RouterModule,
    PagesRoutingModule,
    NavigationModule,
    SearchBoxModule,
    PerfectScrollbarModule
  ],
  declarations: [
    IntranetLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarVerticalComponent,
    NotificationsComponent,
    MessagesComponent,
    AppsComponent,
    CustomizerComponent,
    DrawerComponent,
    DrawerNotificationsComponent,
    DrawerMessagesComponent,
    DrawerSearchComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    DrawerService
  ]
})
export class IntranetLayoutModule {
}
