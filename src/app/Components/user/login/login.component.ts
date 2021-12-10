import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  islogin:boolean=false;
  loginform!: FormGroup ;

  

  constructor(private loginSevice:UserLoginService
    ,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      username:['',[Validators.required,Validators.minLength(4)]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });


    this.islogin= this.loginSevice.LoginStatus();

  }

  Login(){

    let username=  this.loginform.controls['username']?.value;
    let password= this.loginform.controls['password']?.value;
 
   
    this.loginSevice.Login(username,password);

    this.islogin= this.loginSevice.LoginStatus();
    
    username.value="";
    password.value="";
   
  }
}
