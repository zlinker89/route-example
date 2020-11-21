import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardProfileComponent } from '../components/dashboard-profile/dashboard-profile.component';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<DashboardProfileComponent> {
  constructor(
    private Data: DataService,
    private RouterService: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.Data.isLogged) {
      alert('No tienes accesso');
      this.RouterService.navigate(['/login']);
    }
    return this.Data.isLogged;
  }
  canDeactivate(
    component: DashboardProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(component);
    console.log(currentRoute);
    console.log(currentState);
    console.log(nextState);
    return true;
  }
}
