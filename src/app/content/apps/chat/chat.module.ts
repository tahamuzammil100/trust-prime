import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@gaxon/modules';
import {RouterModule, Routes} from '@angular/router';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {ChatService} from './chat.service';
import {ChatComponent} from './chat.component';
import {ChatSidebarComponent} from './chat-sidebar/chat-sidebar.component';
import {OperatorProfileComponent} from './chat-sidebar/operator-profile/operator-profile.component';
import {ChatAreaComponent} from './chat-area/chat-area.component';
import {ChatConversationComponent} from './chat-area/chat-conversation/chat-conversation.component';
import {ChatBoxComponent} from './chat-area/chat-box/chat-box.component';
import {ContactComponent} from './helper-widgets/contact/contact.component';
import {ContactHoverCardComponent} from './helper-widgets/contact-hover-card/contact-hover-card.component';
import { ChatHeaderComponent } from './chat-area/chat-header/chat-header.component';

import { DrawerComponent } from './drawer/drawer.component';
import { NotificationsComponent } from './drawer/notifications/notifications.component';
import { SearchComponent } from './drawer/search/search.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    resolve: {
      list: ChatService
    }
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
    ChatComponent,
    ChatSidebarComponent,
    OperatorProfileComponent,
    ChatAreaComponent,
    ChatConversationComponent,
    ChatBoxComponent,
    ContactComponent,
    ContactHoverCardComponent,
    ChatHeaderComponent,
    DrawerComponent,
    NotificationsComponent,
    SearchComponent
  ],
  entryComponents: [
    ContactHoverCardComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ChatModule {
}
