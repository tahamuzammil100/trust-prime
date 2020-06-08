import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {TaskManagerComponent} from './task-manager.component';
import {TaskManagerService} from './task-manager.service';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {TaskSidebarComponent} from './task-sidebar/task-sidebar.component';
import {TaskListItemComponent} from './task-list/task-list-item/task-list-item.component';
import {TaskConversationComponent} from './task-details/task-conversation/task-conversation.component';
import {CommentBoxComponent} from './task-details/comment-box/comment-box.component';
import {BadgesComponent} from './helper-widgets/badges/badges.component';
import {HeaderComponent} from './helper-widgets/header/header.component';
import {BtnCompleteComponent} from './helper-widgets/btn-complete/btn-complete.component';
import {TaskHeaderComponent} from './task-details/header/header.component';
import {AssigneesComponent} from './task-details/header/assignees/assignees.component';
import {DateComponent} from './task-details/header/date/date.component';
import {LabelsComponent} from './task-details/header/labels/labels.component';
import {DrawerComponent} from './drawer/drawer.component';
import {NotificationsComponent} from './drawer/notifications/notifications.component';
import {MessagesComponent} from './drawer/messages/messages.component';
import {SearchComponent} from './drawer/search/search.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: true
};

const routes: Routes = [
  {
    path: 'dashboard',
    component: TaskManagerComponent,
    resolve: {
      tasks: TaskManagerService
    }
  },
  {
    path: 'dashboard/:taskId',
    component: TaskManagerComponent,
    resolve: {
      tasks: TaskManagerService
    }
  },
  {
    path: 'user/:userId',
    component: TaskManagerComponent,
    resolve: {
      tasks: TaskManagerService
    }
  },
  {
    path: 'user/:userId/:taskId',
    component: TaskManagerComponent,
    resolve: {
      tasks: TaskManagerService
    }
  },
  {
    path: 'project/:projectId',
    component: TaskManagerComponent,
    resolve: {
      tasks: TaskManagerService
    }
  },
  {
    path: 'project/:projectId/:taskId',
    component: TaskManagerComponent,
    resolve: {
      tasks: TaskManagerService
    }
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
    declarations: [
        TaskManagerComponent,
        TaskSidebarComponent,
        TaskDetailsComponent,
        TaskListComponent,
        TaskListItemComponent,
        TaskConversationComponent,
        CommentBoxComponent,
        BadgesComponent,
        HeaderComponent,
        BtnCompleteComponent,
        TaskHeaderComponent,
        AssigneesComponent,
        DateComponent,
        LabelsComponent,
        DrawerComponent,
        NotificationsComponent,
        MessagesComponent,
        SearchComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        PerfectScrollbarModule
    ],
    exports: [
        TaskListComponent
    ],
    providers: [
        TaskManagerService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class TaskManagerModule {
}
