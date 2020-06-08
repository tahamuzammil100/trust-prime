import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';

import {BasicTablesComponent} from './basic-tables/basic-tables.component';
import {DataTablesComponent} from './data-tables/data-tables.component';
import {TableSortableComponent} from './data-tables/table-sortable/table-sortable.component';
import {TableFilteringComponent} from './data-tables/table-filtering/table-filtering.component';
import {TablePaginationComponent} from './data-tables/table-pagination/table-pagination.component';
import {TableCompleteComponent} from './data-tables/table-complete/table-complete.component';
import {SortableDirective} from './data-tables/sortable.directive';

const componentsRoutes: Routes = [
  {
    path: 'base-table',
    component: BasicTablesComponent
  },
  {
    path: 'data-table',
    component: DataTablesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(componentsRoutes)
  ],
  declarations: [
    BasicTablesComponent,
    DataTablesComponent,
    TableSortableComponent,
    TableFilteringComponent,
    TablePaginationComponent,
    TableCompleteComponent,
    SortableDirective
  ]
})
export class TablesModule {
}
