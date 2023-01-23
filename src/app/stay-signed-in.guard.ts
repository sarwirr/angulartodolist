import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StaySignedInGuard implements CanActivate {
  constructor(
    private router : Router,
    private us : UsersService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        const token = localStorage.getItem('token');
        if (token && this.us.isAuthenticated()) {
            this.router.navigate(['todo']);
            return false; 
            }
        return true;

  
  }
  
}
