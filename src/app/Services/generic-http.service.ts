import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponseVM } from '../ViewModles/http-response-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http:HttpClient) { }


  // getAll():Observable<HttpResponseVM>{
  // }
  // getByID(id:number):Observable<HttpResponseVM>{

  // }

  // create(newItem:any):Observable<HttpResponseVM>{

  // }
  // edit(id:number,item:any):Observable<HttpResponseVM>{

  // }

  // delete(newItem:any):Observable<HttpResponseVM>{

  // }
}
