import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
isUserLogin:boolean=false;
  constructor(private userLogin:UserLoginService) { }

  ngOnInit(): void {
    this.userLogin.loginStatusSubject().subscribe({
      next:(islog=>{
        this.isUserLogin=islog;
      })
    })
  }

  logOut(){
    this.userLogin.Logout();
  }
}
