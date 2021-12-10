import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IproductApi } from '../ViewModles/iproduct-api';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiServiceService {

  constructor(private http:HttpClient ) {


   }
   getAllProducts():Observable<IproductApi[]>{
    return this.http.get<IproductApi[]>(`${environment.ApiUrl}/products`)
   }

   getProductsByCategoryID(catID:number):Observable<IproductApi[]>{
    return this.http.get<IproductApi[]>(`${environment.ApiUrl}/products?CateogryID=${catID}`)
   }
   getProductsByID(prodID:number):Observable<IproductApi>{
    return this.http.get<IproductApi>(`${environment.ApiUrl}/products/${prodID}`)

   }
   inserProudect(product:IproductApi):Observable<any>{
     const httpoptions={
       headers:new HttpHeaders({
         'content-type':'application/JSON',
        //  'Authorization':'AcessToken'
       })
     }
    return this.http.post<IproductApi>(`${environment.ApiUrl}/products`,JSON.stringify(product),httpoptions)
   }

   editQuantaty(prod:IproductApi):Observable<any>{
    const httpoptions={
      headers:new HttpHeaders({
        'content-type':'application/JSON',
       //  'Authorization':'AcessToken'
      })
    }
     return this.http.patch(`${environment.ApiUrl}/products/${prod.id}`, JSON.stringify(prod),httpoptions)

   }

}
