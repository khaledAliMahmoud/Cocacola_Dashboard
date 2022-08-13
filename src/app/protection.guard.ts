import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedOutService } from 'src/app/logged-out.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectionGuard implements CanActivate {

  constructor(private _LoggedOutService:LoggedOutService , private _Router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('userdata') !=null ){
        return true
      }else{
        this._Router.navigate(['/login']);
        return false
      }



  }

}
