import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';
import {OrderModule} from 'ngx-order-pipe';
import {SearchPageService} from './search/SearchPageService';
import {ProfilePageService} from './profile/profile-page.service';
import {WallPageService} from './wall-page/wall-page.service';

import {LayoutsComponent} from './layouts/layouts.component';
import {BlankComponent} from './blank/blank.component';
import {HelpComponent} from './help/help.component';
import {SearchPageComponent} from './search/search-page.component';
import {LockScreenComponent} from './frontend/lock-screen/lock-screen.component';

import {WallPageComponent} from './wall-page/wall-page.component';
import {WallRightSidebarComponent} from './wall-page/right-sidebar/wall-right-sidebar.component';
import {WallLeftSidebarComponent} from './wall-page/left-sidebar/wall-left-sidebar.component';
import {PostsComponent} from './wall-page/posts/posts.component';
import {PostDetailComponent} from './wall-page/posts/post-detail/post-detail.component';
import {CommentBoxComponent} from './wall-page/posts/post-detail/comment-box/comment-box.component';

import {ProfilePageComponent} from './profile/profile-page.component';
import {ProfileBannerComponent} from './profile/banner/profile-banner.component';
import {ProfileContentComponent} from './profile/content/profile-content.component';
import {ProfileContactComponent} from './profile/content/contact/profile-contact.component';
import {ProfileAboutComponent} from './profile/content/about/profile-about.component';
import {ProfileEventsComponent} from './profile/content/events/profile-events.component';
import {TabsAboutProfileComponent} from './profile/content/about/tabs-about-profile/tabs-about-profile.component';
import {TabAboutProfileComponent} from './profile/content/about/tab-about-profile/tab-about-profile.component';

const appsRoutes: Routes = [
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'wall',
    component: WallPageComponent,
    resolve: {
      data: WallPageService
    }
  },
  {
    path: 'search',
    component: SearchPageComponent,
    resolve: {
      data: SearchPageService
    }
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    resolve: {
      data: ProfilePageService
    }
  },
  {
    path: 'layouts',
    component: LayoutsComponent
  },
  {
    path: 'lock-screen',
    component: LockScreenComponent
  },
  {
    path: '**',
    component: BlankComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OrderModule,
    RouterModule.forChild(appsRoutes)
  ],
  declarations: [
    LayoutsComponent,
    BlankComponent,
    HelpComponent,
    SearchPageComponent,
    LockScreenComponent,
    WallPageComponent,
    WallRightSidebarComponent,
    WallLeftSidebarComponent,
    PostDetailComponent,
    CommentBoxComponent,
    PostsComponent,
    ProfileContactComponent,
    ProfilePageComponent,
    ProfileBannerComponent,
    ProfileContentComponent,
    ProfileAboutComponent,
    ProfileEventsComponent,
    TabsAboutProfileComponent,
    TabAboutProfileComponent
  ]
})
export class PagesModule {
}
