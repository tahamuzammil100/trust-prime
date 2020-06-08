import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './charts/the-charts.module#TheChartsModule'
  },
  {
    path: 'charts',
    loadChildren: './charts/the-charts.module#TheChartsModule'
  },
  {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class VisualizationModule {
}
