// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BackOfficeMiniLayoutComponent} from './back-office-mini-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BackOfficeMiniLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '@app/content/main/main.module#MainModule',
      },
      {
        path: 'main',
        loadChildren: '@app/content/main/main.module#MainModule',
      },
      {
        path: 'components',
        loadChildren: '@app/content/components/components.module#ComponentsModule',
      },
      {
        path: 'forms',
        loadChildren: '@app/content/forms/forms.module#FormsModule',
      },
      {
        path: 'extra-components',
        loadChildren: '@app/content/extra-components/extra-components.module#ExtraComponentsModule',
      },
      {
        path: 'visualization',
        loadChildren: '@app/content/visualization/visualization.module#VisualizationModule',
      },
      {
        path: 'pages',
        loadChildren: '@app/content/pages/pages.module#PagesModule',
      },
      {
        path: 'extra-views',
        loadChildren: '@app/content/extra-views/extra-views.module#ExtraViewsModule',
      },
      {
        path: 'apps',
        loadChildren: '@app/content/apps/apps.module#AppsModule',
      },
      {
        path: 'page',
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
