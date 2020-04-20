import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {

      // const currentUser = this.authenticationService.currentUserValue;
      // if (currentUser) {
      //     // check if route is restricted by role
      //     if (next.data.roles && next.data.roles.indexOf(currentUser.role) === -1) {
      //         // role not authorised so redirect to home page
      //         this.router.navigate(['/']);
      //         return false;
      //     }

      //     // authorised so return true
      //     return true;
      // }
      return true;
    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/signIn'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
