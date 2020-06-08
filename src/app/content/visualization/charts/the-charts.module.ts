import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '@gaxon/modules';
import {NgMasonryGridModule} from 'ng-masonry-grid';
import {ChartsModule} from 'ng2-charts';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ChartjsComponent} from './chartjs/chartjs.component';
import {AmchartsComponent} from './amcharts/amcharts.component';
import {NgxComponent} from './ngx/ngx.component';
import {ChartjsService} from './chartjs/chartjs.service';
import {AmchartsService} from './amcharts/amcharts.service';

const chartsRoutes: Routes = [
  {
    path: '',
    component: ChartjsComponent,
    resolve: {
      chartts: ChartjsService
    }
  },
  {
    path: 'chartjs',
    component: ChartjsComponent,
    resolve: {
      chartts: ChartjsService
    }
  },
  {
    path: 'amcharts',
    component: AmchartsComponent,
    resolve: {
      chartts: AmchartsService
    }
  },
  {
    path: 'ngx',
    component: NgxComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    NgxChartsModule,
    AmChartsModule,
    SharedModule,
    NgMasonryGridModule,
    RouterModule.forChild(chartsRoutes)
  ],
  declarations: [
    ChartjsComponent,
    NgxComponent,
    AmchartsComponent
  ]
})
export class TheChartsModule {
}
