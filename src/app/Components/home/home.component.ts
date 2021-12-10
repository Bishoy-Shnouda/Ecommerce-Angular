import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductsApiServiceService } from 'src/app/Services/products-api-service.service';
import { ScheduledAdsService } from 'src/app/Services/scheduled-ads.service';
import { ICategoryApi } from 'src/app/ViewModles/icategory-api';
import { IproductApi } from 'src/app/ViewModles/iproduct-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {
  showlogo:boolean=true;
  IsPurshased:boolean=false;  
  Discountvalue:Number=30;
  catid:Number=0;
  clientName:string="";

  ProductList!:IproductApi[];
  Cateogry!:ICategoryApi[];

  private subscribtion!:Subscription;
  private subscribtions!:Subscription[];

  constructor( private schudalsAdsservice:ScheduledAdsService,
    private categoryservice:CategoryApiService,
    private productsApi:ProductsApiServiceService
    ) { 

    }
 
  ngOnInit(): void {

    this.categoryservice.getAllCategory().subscribe(
      (response)=>{
        this.Cateogry=response;
      }
    );

    this.productsApi.getAllProducts().subscribe(
      (response)=>{
        this.ProductList=response;
      }
      );
    const subscriber={
      next:(msg:string)=>{alert(msg);},
      error:(msg:string)=>{alert("Error "+msg)},
      complate:(msg:string)=>{alert("Thank You")},
    }
  
  // this.subscribtion=  this.schudalsAdsservice.ScheduledAds().subscribe(subscriber);
  let filterd= this.schudalsAdsservice.ScheduledAds().pipe(
    filter((ad:string)=>ad.includes("a"))
    ,map((ad:string)=>"Offer: "+ad)
  )
  // this.subscribtion=  filterd.subscribe(subscriber);

  // this.subscribtions.push(this.subscribtion);
  }

  ngOnDestroy(): void {

    // for(let sub of this.subscribtions)
    //   sub.unsubscribe();
    }


  toggelimg(){
    this.showlogo=!this.showlogo;
  }

  toggelBuy(){
    this.IsPurshased=!this.IsPurshased;
  }

  // Quantitydecrease(Quantity:number){
   
  // }
  
}

