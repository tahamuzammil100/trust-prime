import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DrawerService} from './drawer.service';

const routes: Routes = [
  {
    path: 'task-manager',
    loadChildren: './task-manager/task-manager.module#TaskManagerModule'
  },
  {
    path: 'mail',
    loadChildren: './mail/mail.module#MailModule'
  },
  {
    path: 'contacts',
    loadChildren: './contacts/contacts.module#ContactsModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
    DrawerService
  ]
})
export class AppsModule {
}
