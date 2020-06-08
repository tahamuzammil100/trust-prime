import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {SlideshowModule} from 'ng-simple-slideshow';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {SectionsModule} from '@app/content/sections/sections.module';

import {WidgetsService} from './widgets.service';
import {ModernWidgetsComponent} from './modern-widgets/modern-widgets.component';
import {ClassicWidgetsComponent} from './classic-widgets/classic-widgets.component';
import {SocialMediaComponent} from './social-media/social-media.component';
import {WidgetBgcolorComponent} from './widget-bgcolor/widget-bgcolor.component';
import {WidgetFlyingBirdComponent} from './widget-flying-bird/widget-flying-bird.component';
import {WidgetWorkStatusComponent} from './widget-work-status/widget-work-status.component';
import {WidgetIncrementUsersComponent} from './widget-increment-users/widget-increment-users.component';
import {WidgetCampaignStatsComponent} from './widget-campaign-stats/widget-campaign-stats.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const dashboardsRoutes: Routes = [
  {
    path: '',
    component: ClassicWidgetsComponent,
    resolve: {
      data: WidgetsService
    }
  },
  {
    path: 'classic',
    component: ClassicWidgetsComponent,
    resolve: {
      data: WidgetsService
    }
  },
  {
    path: 'modern',
    component: ModernWidgetsComponent,
    resolve: {
      data: WidgetsService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
    SectionsModule,
    SlideshowModule,
    AmChartsModule,
    RouterModule.forChild(dashboardsRoutes),
    PerfectScrollbarModule
  ],
  declarations: [
    ClassicWidgetsComponent,
    ModernWidgetsComponent,
    SocialMediaComponent,
    WidgetBgcolorComponent,
    WidgetFlyingBirdComponent,
    WidgetWorkStatusComponent,
    WidgetIncrementUsersComponent,
    WidgetCampaignStatsComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class WidgetsModule {
}
