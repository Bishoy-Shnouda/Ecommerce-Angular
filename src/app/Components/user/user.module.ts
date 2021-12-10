import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './user-auth.guard';
import { ReactiveFormsModule } from '@angular/forms';


const routes:Routes=[
  
  {path:'' ,redirectTo:'/MyProfile',pathMatch:'full'},
  {path:'MyProfile' , component:ProfileComponent,canActivate:[UserAuthGuard]},
  {path:'EditProfile' , component:EditProfileComponent,canActivate:[UserAuthGuard]},
  {path:'Login' , component:LoginComponent},
  
]
@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class UserModule { }
