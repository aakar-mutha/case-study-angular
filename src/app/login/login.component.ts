import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginserviceService } from '../login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any;
  resp: any;
  i: any;
  constructor(private formbuilder: FormBuilder, private loginService: LoginserviceService, private router: Router) {
    this.loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });

    if(localStorage.getItem('role')){
      this.router.navigate(['/'+localStorage.getItem('role')+'dash']);
    }
  }

  get email() {
    return this.loginform.get('email');
  }
  get pass() {
    return this.loginform.get('pass');
  }

  onLogin() {
    this.loginService.getData().subscribe(res => {
      this.resp = res;
      console.log(this.resp.length);
      for (this.i = 0; this.i < this.resp.length; this.i++) {
        // console.log(this.email.value);
        // console.log(this.pass.value);
        console.log(this.resp[this.i]);
        console.log(this.email.value == this.resp[this.i].email && this.pass.value == this.resp[this.i].pass)
        if (this.email.value == this.resp[this.i].email && this.pass.value == this.resp[this.i].pass) {
          alert('Login Successful');
          // console.log(this.resp[this.i].role);
          if (this.resp[this.i].role == 'seller') {
            this.router.navigate(['/sellerdash']);
            localStorage.setItem('fname', this.resp[this.i].fname);
            localStorage.setItem('lname', this.resp[this.i].lname);
            localStorage.setItem('email', this.resp[this.i].email);
            localStorage.setItem('role', this.resp[this.i].role);
            break;
          }
          else {
            this.router.navigate(['/userdash']);
            localStorage.setItem('fname', this.resp[this.i].fname);
            localStorage.setItem('lname', this.resp[this.i].lname);
            localStorage.setItem('email', this.resp[this.i].email);
            localStorage.setItem('role', this.resp[this.i].role);
            break;
          }
          // localStorage.setItem('token',"eyJhbGciOiJIUzI1NiJ9.eyJmbmFtZSI6IkFha2FyIiwibG5hbWUiOiJNdXRoYSIsIm1udW0iOiI5NjU3NTM5NzAwIiwiZW1haWwiOiJhYWthci5tdXRoYTE4QGdtYWlsLmNvbSJ9.AosLUv67pSiNqMBPYDo_xQILyJEdL6r6zcYuUWlrGyg");
        }
      }
      if (this.i == this.resp.length) {
        alert('Login Failed!. Please enter correct credentials');
        // this.loginform.reset();
      }
    });
  }

  ngOnInit(): void {
  }

}
