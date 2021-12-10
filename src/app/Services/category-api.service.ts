import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategoryApi } from '../ViewModles/icategory-api';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService  {

  constructor(private http:HttpClient ) { 


  }

  getAllCategory():Observable<ICategoryApi[]>{
    return this.http.get<ICategoryApi[]>(`${environment.ApiUrl}/category`)
   }
}
