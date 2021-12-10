import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private userLoginService :UserLoginService
    ,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let isLogin:boolean=this.userLoginService.LoginStatus();
    if(isLogin){
      return true;
    }
    else{
      this.router.navigate(['/User/Login']);
      return false;
    }
  }
  
}
