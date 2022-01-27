import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/fontawesome-svg-core'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  logoicon = faShippingFast;
  searchicon = faSearch;
  carticon = faShoppingCart;
  constructor() { }

  ngOnInit(): void {
  }

}
