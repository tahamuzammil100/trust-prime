import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {SlideshowModule} from 'ng-simple-slideshow';

import {BasicListComponent} from './basic-list/basic-list.component';
import {ListViewsService} from './list-views.service';
import {AdvancedListComponent} from './advanced-list/advanced-list.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicListComponent,
    resolve: {
      usersList: ListViewsService
    }
  },
  {
    path: 'advanced',
    component: AdvancedListComponent,
    resolve: {
      realestates: ListViewsService
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
    BasicListComponent,
    AdvancedListComponent
  ]
})
export class ListViewsModule {
}
