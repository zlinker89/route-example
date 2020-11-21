import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardProfileComponent } from './components/dashboard-profile/dashboard-profile.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardProfileComponent,
    DashboardHeaderComponent,
    HeaderLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
