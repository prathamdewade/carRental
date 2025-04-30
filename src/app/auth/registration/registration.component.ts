import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user={

    "userName": "",
    "email": "",
    "password": "",
    "phoneNumber": "",
    "address": ""
  }

  vender={
   
  "ownerName": "",
  "email": "",
  "password": "",
  "phoneNumber": "",
  "address": "",
  "agencyName": ""
  }
 
  constructor(private service : UserApiService,
    private v_service : VenderapiService,
    private router :Router
  ){}

  onUserRegister(){

    this.service.userRegister(this.user).subscribe({
      next: (res) => {
        alert("User Registration successfully")
        console.log('Registered:', res);
        sessionStorage.setItem("userRole", "user");
        sessionStorage.setItem('loggedInUser', res);
        this.router.navigate(['/user-index']);
      },
      error: (err) => {
        alert("Something went wrong while register data")
        console.error('Registration failed:', err);
        
        // Check if error has a JSON body
        if (err.error && err.error.message) {
          alert(err.error.message); // Show backend message
        } else {
          alert('Registration failed. Please try again.');
        }
      }
    });
  } 
    
  onVenderRegister(){
    this.v_service.onRegister(this.vender).subscribe({
      next: (res) => {
        alert("Vendor Registration successfully")
        console.log('Registered:', res); 
        sessionStorage.setItem("userRole", "vender");
        sessionStorage.setItem('loggedInVender', res);

        this.router.navigate(['/vender/view']);
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert("Something went wrong while register data")
        // Check if error has a JSON body
        if (err.error && err.error.message) {
          alert(err.error.message); // Show the backend error
        } else {
          alert('Registration failed. Please try again.');
        }
      }
    });
  }

  

}
