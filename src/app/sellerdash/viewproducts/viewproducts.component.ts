import { Component, OnInit } from '@angular/core';
import { GetproductserviceService } from './getproductservice.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  a:Product[] = [];
  check = false;
  productlist:any;
  constructor(private getproductservive:GetproductserviceService)  { 
    this.getproductservive.getProduct().subscribe(data=>{
      this.productlist=data;
    });
  }
  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  quantity: number;
}
