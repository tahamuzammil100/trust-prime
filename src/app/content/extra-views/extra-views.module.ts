import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'grid-view',
    loadChildren: './grid-views/grid-views.module#GridViewsModule'
  },
  {
    path: 'list-view',
    loadChildren: './list-views/list-views.module#ListViewsModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ExtraViewsModule {
}
