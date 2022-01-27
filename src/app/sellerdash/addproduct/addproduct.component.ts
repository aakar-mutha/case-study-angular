import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddProductServiceService } from './add-product-service.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addproductform: any;
  event: any;
  constructor(private formbuilder: FormBuilder, private addproductService: AddProductServiceService) {
    this.addproductform = this.formbuilder.group({
      pname: ['', [Validators.required, Validators.minLength(3)]],
      pdesc: ['', [Validators.required, Validators.minLength(3)]],
      pprice: ['', [Validators.required]],
      // pimage : ['', [Validators.required,]],
      // pimagesource : ['', [Validators.required,]],
    });
  }

  ngOnInit(): void {
  }

  get pname() {
    return this.addproductform.get('pname');
  }
  get pdesc() {
    return this.addproductform.get('pdesc');
  }
  get pprice() {
    return this.addproductform.get('pprice');
  }

  postproduct() {
    this.addproductService.postData(this.addproductform.value).subscribe((res: any) => {
      if (res.id) {
        alert('Product Added Successfully');
        this.addproductform.reset();
      }
      else {
        alert('Product Not Added');
        this.addproductform.reset();
      }
    });
  }
 

  // onFileChange(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.addproductform.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }
}
