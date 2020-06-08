import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {SectionsModule} from '@app/content/sections/sections.module';

import {MetricsComponent} from './metrics/metrics.component';
import {MetricsService} from './metrics/metrics.service';

const appsRoutes: Routes = [
  {
    path: '',
    loadChildren: './dashboards/dashboards.module#DashboardsModule'
  },
  {
    path: 'dashboards',
    loadChildren: './dashboards/dashboards.module#DashboardsModule'
  },
  {
    path: 'widgets',
    loadChildren: './widgets/widgets.module#WidgetsModule'
  },
  {
    path: 'metrics',
    component: MetricsComponent,
    resolve: {
      data: MetricsService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule,
    RouterModule.forChild(appsRoutes)
  ],
  declarations: [
    MetricsComponent
  ]
})
export class MainModule {
}
