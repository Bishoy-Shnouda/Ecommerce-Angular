import { Injectable } from '@angular/core';
import { IproductApi } from '../ViewModles/iproduct-api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private ProductList:IproductApi[];
  constructor() {

    this.ProductList=[
      {id:1,Name : "product1",Quantity: 77, Price : 255,Img: "../../assets/images/headphone1.jpg",CateogryID :1},
      {id:2,Name : "product2",Quantity: 3, Price : 3000,Img: "../../assets/images/headphone2.jpg",CateogryID :1},
      {id:3,Name : "product3",Quantity: 1, Price : 5800,Img: "../../assets/images/headphone3.jpg",CateogryID :1},
      {id:4,Name : "product4",Quantity: 88, Price : 300,Img: "../../assets/images/printer1.jpg",CateogryID :2},
      {id:5,Name : "product5",Quantity: 500, Price : 100,Img: "../../assets/images/printer2.jpg",CateogryID :2},
      {id:6,Name : "product6",Quantity: 0, Price : 1000,Img: "../../assets/images/printer3.jpg",CateogryID :2},
    ];
   }

   getAllProducts():IproductApi[]{
    return this.ProductList;
   }
   
   getProductsByCatID(catID:Number):IproductApi []{

    return this.ProductList.filter(pro=>pro.CateogryID==catID);
   }

   getProductByID(proID:number):IproductApi|undefined{
    return this.ProductList.find(pro=>pro.id==proID);
   }
}
