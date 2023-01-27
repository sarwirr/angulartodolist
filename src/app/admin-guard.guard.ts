import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Roles } from 'src/roles.enum';
import { UsersService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
 constructor(private us: UsersService, private router: Router) { }

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
      const token = localStorage.getItem('token');
    if (token && this.us.isAuthenticated()) {
      return lastValueFrom(this.us.showmeroles()).then((res: any) => {
    console.log(res.roles);
        if (res.roles === Roles.ADMIN) {
          return true;
        }
        else 
        {
          this.router.navigate(['todo']);
          return false;
        }
      })
    }
   return false ;
    }
  }
