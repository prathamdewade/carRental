import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    isLogin: boolean = false;
    isVendor: boolean = false; // Set true if the logged-in user is a vendor
    
     constructor(private service : UserApiService){
      
     }
      
    
     onLogOut(){
        this.isLogin=false;
        this.service.userLogOut();
     }
}
