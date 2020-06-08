import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@gaxon/modules';
import {RouterModule, Routes} from '@angular/router';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {ContactsService} from './contacts.service';
import {ContactsComponent} from './contacts.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactListItemComponent} from './contacts-list/contact-list-item/contact-list-item.component';
import {ContactsSidebarComponent} from './contacts-sidebar/contacts-sidebar.component';
import {ContactsHeaderComponent} from './contacts-header/contacts-header.component';
import {SearchBarComponent} from './contacts-header/search-bar/search-bar.component';
import { ContactListHeaderComponent } from './contacts-list/contact-list-header/contact-list-header.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

import { DrawerComponent } from './drawer/drawer.component';
import { NotificationsComponent } from './drawer/notifications/notifications.component';
import { SearchComponent } from './drawer/search/search.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

const routes: Routes = [
  {
    path: 'all',
    component: ContactsComponent,
    resolve: {
      contacts: ContactsService
    }
  },
  {
    path: ':handle',
    component: ContactsComponent,
    resolve: {
      contacts: ContactsService
    }
  },
  {
    path: '**',
    redirectTo: 'all'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    PerfectScrollbarModule
  ],
  declarations: [
    ContactsComponent,
    ContactsListComponent,
    ContactListItemComponent,
    ContactsSidebarComponent,
    ContactsHeaderComponent,
    SearchBarComponent,
    ContactListHeaderComponent,
    EditContactComponent,
    DrawerComponent,
    NotificationsComponent,
    SearchComponent
  ],
  entryComponents: [
    EditContactComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ContactsModule {
}
