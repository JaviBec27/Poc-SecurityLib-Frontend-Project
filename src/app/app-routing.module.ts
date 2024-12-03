import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PermissionGuard } from './+shared/services/auth/permission-guard.guard';
import { C1Component } from './portal/c1/c1.component';
import { C2Component } from './portal/c2/c2.component';
import { C3Component } from './portal/c3/c3.component';
import { ViewTreePermissionsComponent } from './view-tree-permissions/view-tree-permissions.component';
import { C21Component } from './portal/c2/c2.1/c2.1.component';
import { C22Component } from './portal/c2/c2.2/c2.2.component';
import { C23Component } from './portal/c2/c2.3/c2.3.component';
import { C231Component } from './portal/c2/c23/c2.3.1/c2.3.1.component';
import { C232Component } from './portal/c2/c23/c2.3.2/c2.3.2.component';
import { C233Component } from './portal/c2/c23/c2.3.3/c2.3.3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'component1',
    component: C1Component,
    canActivate: [PermissionGuard],
    data: { permission: '1' }
  },
  {
    path: 'component2',
    component: C2Component,
    canActivate: [PermissionGuard],
    data: { permission: '2' }
  },
  {
    path: 'component2.1',
    component: C21Component,
    canActivate: [PermissionGuard],
    data: { permission: '2.1' }
  },
  {
    path: 'component2.2',
    component: C22Component,
    canActivate: [PermissionGuard],
    data: { permission: '2.2' }
  },
  {
    path: 'component2.3',
    component: C23Component,
    canActivate: [PermissionGuard],
    data: { permission: '2.3' }
  },
  {
    path: 'component2.3.1',
    component: C231Component ,
    canActivate: [PermissionGuard],
    data: { permission: '2.3.1' }
  },
  {
    path: 'component2.3.2',
    component: C232Component ,
    canActivate: [PermissionGuard],
    data: { permission: '2.3.2' }
  },
  {
    path: 'component2.3.3',
    component: C233Component,
    canActivate: [PermissionGuard],
    data: { permission: '2.3.3' }
  },
  {
    path: 'component3',
    component: C3Component,
    canActivate: [PermissionGuard],
    data: { permission: '3' }
  },
  {
    path: 'ViewTreePermission',
    component: ViewTreePermissionsComponent,
  },
  { path: 'access-denied', component: AccessDeniedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
