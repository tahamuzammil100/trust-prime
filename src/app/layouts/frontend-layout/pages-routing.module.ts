import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontendLayoutComponent} from './frontend-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: 'error',
        loadChildren: '@app/content/pages/frontend/error/error-page.module#ErrorPageModule',
      },
      {
        path: 'auth',
        loadChildren: '@app/content/pages/frontend/auth/auth-page.module#AuthPageModule',
      },
      {
        path: 'pages',
        loadChildren: '@app/content/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
