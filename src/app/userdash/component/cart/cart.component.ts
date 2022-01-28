import { Component, OnInit } from '@angular/core';
import { GetcartserviceService } from './getcartservice.service';
import { GetproductserviceService } from '../products/getproductservice.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartdata: any;
  columnsToDisplay = ['id', 'title', 'image', 'price', 'quantity'];
  cartdata1: Cart[] = [];
  cartdata2: Cart[] = [];
  products: any;
  count: number = 0;
  idn: number = 0;
  trashicon = faTrash;
  loginstate: boolean = true;
  constructor(
    getcart: GetcartserviceService,
    getproduct: GetproductserviceService
  ) {
    if(localStorage.getItem('role') != null){
      this.loginstate = false;
    }
    getcart.getCart(3).subscribe((data: any) => {
      this.cartdata = data;
    });

    getproduct.getProduct().subscribe((res: any) => {
      this.products = res;
      for (let i = 0; i < this.cartdata.length; i++) {
        for (let j = 0; j < this.cartdata[i].products.length; j++) {
          for (let k = 0; k < res.length; k++) {
            if (this.cartdata[i].products[j].productId == res[k].id) {
              res[k].quantity = this.cartdata[i].products[j].quantity;
              this.cartdata1.push(res[k]);
            }
          }
        }
      }
      for (let i = 0; i < this.products.length; i++) {
        this.count = 0;
        for (let j = 0; j < this.cartdata1.length; j++) {
          if (this.products[i].id == this.cartdata1[j].id) {
            this.count += this.cartdata1[j].quantity;
            this.idn = j;
          }
        }
        if (this.count > 0) {
          this.cartdata1[this.idn].quantity = this.count;
          this.cartdata2.push(this.cartdata1[this.idn]);
        }
      }
    });
  }
  delitem(id: any) {
    for (let i = 0; i < this.cartdata2.length; i++) {
      if (this.cartdata2[i].id == id) {
        this.cartdata2.splice(i, 1);
      }
    }
  }
  ngOnInit() { }
}
export interface Cart {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}
