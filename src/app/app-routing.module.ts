import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/layouts/auth-layout/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/default/main/dashboards/crm'
  },
  {
    path: '',
    loadChildren: './layouts/auth-layout/auth.module#AuthModule'
  },
  {
    path: 'frontend',
    loadChildren: './layouts/frontend-layout/frontend-layout.module#FrontendLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'default',
    loadChildren: './layouts/default-layout/default-layout.module#DefaultLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'crm',
    loadChildren: './layouts/crm-layout/crm-layout.module#CrmLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'back-office',
    loadChildren: './layouts/back-office-layout/back-office-layout.module#BackOfficeLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'back-office-mini',
    loadChildren: './layouts/back-office-mini-layout/back-office-mini-layout.module#BackOfficeMiniLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'modern',
    loadChildren: './layouts/modern-layout/modern-layout.module#ModernLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'intranet',
    loadChildren: './layouts/intranet-layout/intranet-layout.module#IntranetLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'listing',
    loadChildren: './layouts/listing-layout/listing-layout.module#ListingLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'saas',
    loadChildren: './layouts/saas-layout/saas-layout.module#SaasLayoutModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/default/main/dashboards/listing'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
