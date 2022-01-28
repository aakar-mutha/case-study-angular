import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  // logoicon = faShippingFast;
  // searchicon = faSearch;
  // carticon = faShoppingCart;
  // usericon = faUser;
  // logincheck: any;
  // signouticon = faSignOutAlt;
  state: boolean = true;
  @ViewChild('sidenav') sidenav: any;
  name = localStorage.getItem('fname') + " " + localStorage.getItem('lname');
  // role = localStorage.getItem('role');
  constructor(private router: Router, private ovserver: BreakpointObserver) {
    {
      if (localStorage.getItem('role') != null) {
        this.state = false;
      }

    }
  }
  ngAfterViewInit() {
    this.ovserver.observe(['(max-width: 800px)']).subscribe(res => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  
  }
  checklogin() {
    if (localStorage.getItem('role') == 'user' && localStorage.getItem('fname') != null) {
      alert("Already Logged In");
      this.state = false;
    }
    else {
      this.router.navigate(['/login']);
      this.state = true;
    }
  }
  signout() {
    this.state = true;
    localStorage.clear();
    this.router.navigate(['/userdash']);
  }

  ngOnInit(): void {
  }

}
