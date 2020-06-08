import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {MailService} from './mail.service';
import {MailComponent} from './mail.component';
import {MailListComponent} from './mail-list/mail-list.component';
import {MailItemComponent} from './mail-list/mail-item/mail-item.component';
import {MailSidebarComponent} from './mail-sidebar/mail-sidebar.component';
import {MailComposeComponent} from './mail-compose/mail-compose.component';
import {MailDetailsComponent} from './mail-details/mail-details.component';
import {ContactComponent} from './helper-widgets/contact/contact.component';
import {BadgesComponent} from './helper-widgets/badges/badges.component';
import {ContactHoverCardComponent} from './helper-widgets/contact-hover-card/contact-hover-card.component';
import {SearchBarComponent} from './helper-widgets/search-bar/search-bar.component';
import {MailHeaderComponent} from './mail-header/mail-header.component';
import {ModuleHeaderComponent} from './module-header/module-header.component';
import {DetailsHeaderComponent} from './mail-details/details-header/details-header.component';
import {MailConversationComponent} from './mail-details/mail-conversation/mail-conversation.component';

import { DrawerComponent } from './drawer/drawer.component';
import { NotificationsComponent } from './drawer/notifications/notifications.component';
import { SearchComponent } from './drawer/search/search.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

const routes: Routes = [
  {
    path: 'filter/:filterHandle',
    component: MailComponent,
    resolve: {
      mails: MailService
    }
  },
  {
    path: 'filter/:filterHandle/:mailId',
    component: MailComponent,
    resolve: {
      mails: MailService
    }
  },
  {
    path: 'label/:labelHandle',
    component: MailComponent,
    resolve: {
      tasks: MailService
    }
  },
  {
    path: 'label/:labelHandle/:mailId',
    component: MailComponent,
    resolve: {
      mails: MailService
    }
  },
  {
    path: ':folderHandle',
    component: MailComponent,
    resolve: {
      mails: MailService
    }
  },
  {
    path: ':folderHandle/:mailId',
    component: MailComponent,
    resolve: {
      mails: MailService
    }
  },
  {
    path: '**',
    redirectTo: 'inbox'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    PerfectScrollbarModule
  ],
  declarations: [
    MailComponent,
    MailListComponent,
    MailItemComponent,
    MailSidebarComponent,
    MailComposeComponent,
    MailDetailsComponent,
    ContactComponent,
    BadgesComponent,
    ContactHoverCardComponent,
    SearchBarComponent,
    MailHeaderComponent,
    ModuleHeaderComponent,
    DetailsHeaderComponent,
    MailConversationComponent,
    DrawerComponent,
    NotificationsComponent,
    SearchComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [
    ContactHoverCardComponent,
    MailComposeComponent
  ]
})
export class MailModule {
}
