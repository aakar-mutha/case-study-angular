import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetcartserviceService {

  constructor(private http:HttpClient) { }

  getCart(userId:number){
    return this.http.get('https://fakestoreapi.com/carts/user/' + userId);
  }
}
