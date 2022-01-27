import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddProductServiceService {
  name = localStorage.getItem('fname');
  constructor(private http: HttpClient) { }

  postData(data:any) {
    return this.http.post('http://localhost:3000/' + localStorage.getItem('fname')+ localStorage.getItem('lname')+'/', data);
  }


}
