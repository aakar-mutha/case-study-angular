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
  resp:any;
  constructor(private formbuilder: FormBuilder, private loginService: LoginserviceService, private router: Router) {
    this.loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
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
      console.log(this.resp);
      for(var i=0;i<this.resp.length;i++){
        console.log(this.email.value);
        console.log(this.pass.value);
        console.log(this.email.value == this.resp[i].email && this.pass.value == this.resp[i].pass)
        if(this.email.value == this.resp[i].email && this.pass.value == this.resp[i].pass){
          alert('Login Successful');

          if (this.resp[i].role == 'seller') {
            this.router.navigate(['/sellerhome']);
          }
          else  {
            this.router.navigate(['/userhome']);
          }
          // this.loginform.reset();
          break;
          // localStorage.setItem('token',"eyJhbGciOiJIUzI1NiJ9.eyJmbmFtZSI6IkFha2FyIiwibG5hbWUiOiJNdXRoYSIsIm1udW0iOiI5NjU3NTM5NzAwIiwiZW1haWwiOiJhYWthci5tdXRoYTE4QGdtYWlsLmNvbSJ9.AosLUv67pSiNqMBPYDo_xQILyJEdL6r6zcYuUWlrGyg");
          // localStorage.setItem('fname', this.resp[i].fname);
          // localStorage.setItem('lname', this.resp[i].lname);
          // localStorage.setItem('email', this.resp[i].email);
          
        }
        else{
          alert('Login Failed!. Please enter correct credentials');
          this.loginform.reset();
          break;
          
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
