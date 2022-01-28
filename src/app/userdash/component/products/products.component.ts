import { Component, OnInit } from '@angular/core';
import { GetproductserviceService } from './getproductservice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  a:Product[] = [];
  check = false;
  productlist:any;
  constructor(private getproductservive:GetproductserviceService)  { 
    this.getproductservive.getProduct().subscribe(data=>{
      this.productlist=data;
    });
  }

  addtocart(pid:number,qty:number){
    for(let i=0; i< this.a.length ;i++){
      if (this.a[i].id == pid){
        this.check = true;
        this.a[i].quantity ++ ;
        break;
      }
    }
    if(this.check == false){
      this.a.push({
        id:pid,
        quantity:1
      });
    }

 }
  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  quantity: number;
}
