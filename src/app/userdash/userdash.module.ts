import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashRoutingModule } from './userdash-routing.module';
import { UserdashComponent } from './userdash.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    UserdashComponent,
    CartComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    UserdashRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    // MatTableModule
  ]
})
export class UserdashModule { }
