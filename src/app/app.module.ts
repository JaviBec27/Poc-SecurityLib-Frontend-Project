import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewTreePermissionsComponent } from './view-tree-permissions/view-tree-permissions.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { C1Component } from './portal/c1/c1.component';
import { C2Component } from './portal/c2/c2.component';
import { C3Component } from './portal/c3/c3.component';
import { PermissionGuard } from './+shared/services/auth/permission-guard.guard';
import { C21Component } from './portal/c2/c2.1/c2.1.component';
import { C22Component } from './portal/c2/c2.2/c2.2.component';
import { C23Component } from './portal/c2/c2.3/c2.3.component';
import { FormsModule } from '@angular/forms';
import { C231Component } from './portal/c2/c23/c2.3.1/c2.3.1.component';
import { C232Component } from './portal/c2/c23/c2.3.2/c2.3.2.component';
import { C233Component } from './portal/c2/c23/c2.3.3/c2.3.3.component';
import { AuthService } from 'security-lib';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewTreePermissionsComponent,
    AccessDeniedComponent,
    C1Component,
    C2Component,
    C3Component,
    C21Component,
    C22Component,
    C23Component,
    C231Component,
    C232Component,
    C233Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, PermissionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
