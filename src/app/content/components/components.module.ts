import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@gaxon/modules';
import { RouterModule, Routes } from '@angular/router';

const componentsRoutes: Routes = [
  {
    path: 'basic',
    loadChildren: './basic/basic.module#BasicModule'
  },
  {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(componentsRoutes)
  ],
  declarations: []
})
export class ComponentsModule { }
