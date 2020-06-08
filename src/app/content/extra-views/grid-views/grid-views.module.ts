import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';

import {SlideshowModule} from 'ng-simple-slideshow';

import {BasicGridComponent} from './basic-grid/basic-grid.component';
import {AdvancedGridComponent} from './advanced-grid/advanced-grid.component';
import {GridViewsService} from './grid-views.service';


const routes: Routes = [
  {
    path: 'basic',
    component: BasicGridComponent,
    resolve: {
      usersList: GridViewsService
    }
  },
  {
    path: 'advanced',
    component: AdvancedGridComponent,
    resolve: {
      realestates: GridViewsService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SlideshowModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BasicGridComponent,
    AdvancedGridComponent
  ]
})
export class GridViewsModule {
}
