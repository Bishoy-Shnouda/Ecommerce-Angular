import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private isLoginSubject: BehaviorSubject<boolean>;
  constructor(private router: Router) {

    this.isLoginSubject = new BehaviorSubject<boolean>(false);
  }


  Login(username: string, password: string): boolean {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");

    if (username == localStorage.getItem("username") &&
      password == localStorage.getItem("password")) {

      let usertoken = "15bdb16c-e4de-4480-b0a9-a06c6a2ee7a1";
      localStorage.setItem("userToken", usertoken);

      this.isLoginSubject.next(true);

      this.router.navigate(['/apiProducts']);
      return true;
    }
    else {
      this.isLoginSubject.next(false);
      return false;

    }



  }

  Logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("userToken");
    this.isLoginSubject.next(false);

  }

  LoginStatus(): boolean {
    if (localStorage.getItem("userToken")) {

      return true
    }
    else {
      return false;
    }

  }

  loginStatusSubject(): Observable<boolean> {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("userToken");
    
    return this.isLoginSubject;

  }
}
