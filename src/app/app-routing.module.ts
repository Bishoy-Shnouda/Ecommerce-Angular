import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserProductComponent } from './Admin/inser-product/inser-product.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Orders/order-master/order-master.component';
import { ProductDisplayComponent } from './Orders/product-display/product-display.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/apiProducts',pathMatch:'full'},
  {path:'Test' , component:HomeComponent},
  {path:'About' , component:HomeComponent},
  {path:'apiProducts' , component:OrderMasterComponent},
  {path:'apiProducts/:pID' , component:ProductDisplayComponent},
  {path:'apiProducts/:pID/:Count' , component:ProductDisplayComponent},
  {path:'admin/insertproduct' , component:InserProductComponent},
  {path:'Contact' , component:ContactComponent},
{
  path: 'User', 
  loadChildren: () => import('src/app/Components/user/user.module')
  .then(m => m.UserModule)
},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
