import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@gaxon/modules';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {SectionTicketsComponent} from './section-tickets/section-tickets.component';
import {SectionPricingPlansComponent} from './section-pricing-plans/section-pricing-plans.component';
import {SectionOurTeamComponent} from './section-our-team/section-our-team.component';
import {SectionLeadsComponent} from './section-leads/section-leads.component';
import {SectionSupportTicketsComponent} from './section-support-tickets/section-support-tickets.component';
import {SectionVendorRequestsComponent} from './section-vendor-requests/section-vendor-requests.component';
import {SectionProjectsComponent} from './section-projects/section-projects.component';
import { SectionCampaignsResultsComponent } from './section-campaigns-results/section-campaigns-results.component';
import { SectionSocialMediaAdvertisingComponent } from './section-social-media-advertising/section-social-media-advertising.component';
import { SectionPricingUpdatesComponent } from './section-pricing-updates/section-pricing-updates.component';
import { SectionStaticChartComponent } from './section-static-chart/section-static-chart.component';
import { SectionRevenueChartComponent } from './section-revenue-chart/section-revenue-chart.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule
  ],
  declarations: [
    SectionTicketsComponent,
    SectionPricingPlansComponent,
    SectionOurTeamComponent,
    SectionLeadsComponent,
    SectionSupportTicketsComponent,
    SectionVendorRequestsComponent,
    SectionProjectsComponent,
    SectionCampaignsResultsComponent,
    SectionSocialMediaAdvertisingComponent,
    SectionPricingUpdatesComponent,
    SectionStaticChartComponent,
    SectionRevenueChartComponent
  ],
  exports: [
    SectionTicketsComponent,
    SectionPricingPlansComponent,
    SectionOurTeamComponent,
    SectionLeadsComponent,
    SectionSupportTicketsComponent,
    SectionVendorRequestsComponent,
    SectionProjectsComponent,
    SectionCampaignsResultsComponent,
    SectionSocialMediaAdvertisingComponent,
    SectionPricingUpdatesComponent,
    SectionStaticChartComponent,
    SectionRevenueChartComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SectionsModule {
}
