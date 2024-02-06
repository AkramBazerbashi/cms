import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideroutingGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // window.history.replaceState('', '', window.location.href.split['#'][0]);
    // window.location= window.location.href.split['#'][0];
    var obj = {
      Title: '',
      Url: window.location.href.split['#'][0]
     };
    // window.history.pushState(obj, '', window.location.href.split['#'][0]);

    return true;
  }
  // CanActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     // window.location= window.location.href.split['#'][0];
  //     // window.history.replaceState('', '', window.location.href.split['#'][0]);
  //   return true;
  // }
  
}
