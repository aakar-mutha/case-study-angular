import { Component, Input, OnInit } from '@angular/core';
import { GetproductserviceService } from './getproductservice.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,Validators } from '@angular/forms';
import { AddProductServiceService } from '../addproduct/add-product-service.service';


@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})

export class ViewproductsComponent implements OnInit {
 
  
  a:Product[] = [];
  check = false;
  productlist:any;
  constructor(private getproductservive:GetproductserviceService,private modalService: NgbModal)  { 
    this.getproductservive.getProduct().subscribe(data=>{
      this.productlist=data;
    });
    
  }
  open(pimg:any,pname:any,pdesc:any,pprice:any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.pname = pname;
    modalRef.componentInstance.pdesc = pdesc;
    modalRef.componentInstance.pprice = pprice;
    modalRef.componentInstance.pimg = pimg;

    

  }
  ngOnInit(): void {
  }

}

export interface Product {
  id: number;
  quantity: number;
}

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './model-comp.html'
})
export class NgbdModalContent {
  @Input() pname:any;
  @Input() pimg:any;
  @Input() pdesc:any;
  @Input() pprice:any;
  addproductform: any;
  constructor(public activeModal: NgbActiveModal,private formbuilder: FormBuilder, private addproductService: AddProductServiceService) {
    this.addproductform = this.formbuilder.group({
      pname: ['', [Validators.required, Validators.minLength(3)]],
      pdesc: ['', [Validators.required, Validators.minLength(3)]],
      pprice: ['', [Validators.required]],
      // pimage : ['', [Validators.required,]],
      // pimagesource : ['', [Validators.required,]],
    });
  }

  postproduct(a:any,b:any,c:any){
    let product = {
      pname: a,
      pdesc: b,
      pprice: c,
    }
    console.log(product);
    // localStorage.setItem('pname',JSON.stringify(product));
  }
}