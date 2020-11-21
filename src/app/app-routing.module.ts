import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardProfileComponent } from './components/dashboard-profile/dashboard-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix', // de los hijos
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: DashboardHomeComponent
      },
      {
        path: 'profile',
        component: DashboardProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // esto es para hacer pruebas
      useHash: false, // añade /#/
      // paramsInheritanceStrategy: 'always' // hereda parametros
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
