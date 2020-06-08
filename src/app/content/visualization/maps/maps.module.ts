import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {AmChartsModule} from '@amcharts/amcharts3-angular';

import {GoogleMapComponent} from './google-map/google-map.component';
import {AmMapComponent} from './am-map/am-map.component';
import {AmMapService} from './am-map/am-map.service';

const routes: Routes = [
  {
    path: 'google',
    component: GoogleMapComponent
  },
  {
    path: 'vector',
    component: AmMapComponent,
    resolve: {
      maps: AmMapService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCe30oyb0aY980X3GfHqY7jhqsBMBfI9Ek'
    }),
    AgmSnazzyInfoWindowModule,
    AmChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GoogleMapComponent,
    AmMapComponent
  ]
})

export class MapsModule {
}
