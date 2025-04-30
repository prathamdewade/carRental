import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loggedInUser:any;
   role : any;
  constructor() {
    const sessData = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    this.loggedInUser = sessData;
    this.role=sessionStorage.getItem("userRole");
    this.loggedInUser.ownerName=sessData.ownerName;
    console.log(this.loggedInUser)
    console.log(this.role);
    
  }





}

