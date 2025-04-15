import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  // isVendor: boolean = false; // Set true if the logged-in user is a vendor
  role: string | null = null;
  constructor(
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.checkLoginStatus();
  }
  

  checkLoginStatus() {
    const user = sessionStorage.getItem("loggedInUser"); 
    const vender = sessionStorage.getItem("loggedInVender"); 
    this.isLoggedIn = user !== null || vender!==null ;
    this.role = sessionStorage.getItem("userRole");
    console.log(this.role);
  }

  logout() {
    sessionStorage.clear()
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("userRole");
    this.isLoggedIn = false; 
    this.role = null;
    this.router.navigate(['/auth']);
  }
}
