import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductshadowDirective } from './Directives/productshadow.directive';
import { EgyptianNationaIDlPipe } from './Pipes/egyptian-nationa-idl.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { OrderMasterComponent } from './Orders/order-master/order-master.component';
import { OrderDetilesComponent } from './Orders/order-detiles/order-detiles.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDisplayComponent } from './Orders/product-display/product-display.component';
import { InserProductComponent } from './Admin/inser-product/inser-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    ProductshadowDirective,
    EgyptianNationaIDlPipe,
    CreditCardPipe,
    OrderMasterComponent,
    OrderDetilesComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ProductDisplayComponent,
    InserProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
