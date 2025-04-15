import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loggedInUser:any;

  constructor() {
    const sessData = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    this.loggedInUser = {...sessData, ownerName: ''};

    console.log(sessData)
  }


}

