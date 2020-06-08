import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {SlideshowModule} from 'ng-simple-slideshow';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {AgmCoreModule} from '@agm/core';
import {ChartistModule} from 'ng-chartist';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgxEchartsModule} from 'ngx-echarts';
import {SectionsModule} from '@app/content/sections/sections.module';

import {CrmDashboardService} from './crm-dashboard/crm-dashboard.service';
import {ListingDashboardService} from './listing-dashboard/listing-dashboard.service';
import {CryptoDashboardService} from './crypto-dashboard/crypto-dashboard.service';
import {RealStateDashboardService} from './real-state-dashboard/real-state-dashboard.service';
import {CrmDashboardComponent} from './crm-dashboard/crm-dashboard.component';
import {ListingDashboardComponent} from './listing-dashboard/listing-dashboard.component';
import {CryptoDashboardComponent} from './crypto-dashboard/crypto-dashboard.component';

import {SectionBalancePortfolioComponent} from './crypto-dashboard/section-balance-portfolio/section-balance-portfolio.component';
import {SectionBalanceHistoryComponent} from './crypto-dashboard/section-balance-history/section-balance-history.component';
import {TablePaymentHistoryComponent} from './crypto-dashboard/table-payment-history/table-payment-history.component';
import {WidgetCurrentPlanComponent} from './listing-dashboard/widget-current-plan/widget-current-plan.component';
import {WidgetClosedDealsComponent} from './listing-dashboard/widget-closed-deals/widget-closed-deals.component';
import {WidgetPropertiesListComponent} from './listing-dashboard/widget-properties-list/widget-properties-list.component';
import {WidgetOverviewComponent} from './crm-dashboard/widget-overview/widget-overview.component';
import {WidgetRecentTicketsComponent} from './crm-dashboard/widget-recent-tickets/widget-recent-tickets.component';
import {RealStateDashboardComponent} from './real-state-dashboard/real-state-dashboard.component';
import {StaticsComponent} from './real-state-dashboard/statics/statics.component';
import {RevenueComponent} from './real-state-dashboard/revenue/revenue.component';
import {MostSearchPlacesComponent} from './real-state-dashboard/most-search-places/most-search-places.component';
import {NgCircleProgressModule} from 'ng-circle-progress';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const dashboardsRoutes: Routes = [
  {
    path: '',
    component: CrmDashboardComponent,
    resolve: {
      data: CrmDashboardService
    }
  },
  {
    path: 'crm',
    component: CrmDashboardComponent,
    resolve: {
      data: CrmDashboardService
    }
  },
  {
    path: 'listing',
    component: ListingDashboardComponent,
    resolve: {
      data: ListingDashboardService
    }
  },
  {
    path: 'crypto',
    component: CryptoDashboardComponent,
    resolve: {
      data: CryptoDashboardService
    }
  },
  {
    path: 'real-estate',
    component: RealStateDashboardComponent,
    resolve: {
      data: RealStateDashboardService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SectionsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe30oyb0aY980X3GfHqY7jhqsBMBfI9Ek'
    }),
    SlideshowModule,
    AmChartsModule,
    RouterModule.forChild(dashboardsRoutes),
    PerfectScrollbarModule,
    NgxEchartsModule,
    ChartistModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    })
  ],
  declarations: [
    CrmDashboardComponent,
    ListingDashboardComponent,
    CryptoDashboardComponent,
    RealStateDashboardComponent,
    SectionBalancePortfolioComponent,
    SectionBalanceHistoryComponent,
    TablePaymentHistoryComponent,
    WidgetCurrentPlanComponent,
    WidgetClosedDealsComponent,
    WidgetPropertiesListComponent,
    WidgetOverviewComponent,
    WidgetRecentTicketsComponent,
    StaticsComponent,
    RevenueComponent,
    MostSearchPlacesComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class DashboardsModule {
}
