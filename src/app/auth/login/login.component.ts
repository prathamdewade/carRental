import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
user ={
  "email": "",
  "password": ""
}
//her i am user object use both means vender /user login 

   constructor(private service : UserApiService,
    private router : Router,
    private v_service :VenderapiService

   ){}
 
   onUserLogin() {
    console.log(this.user);
  
    this.service.userLogin(this.user).subscribe({
      next: (res) => {
        console.log('Login successful:', res);
        this.router.navigate(['/user-index']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        
        // Optional: Display friendly message to user
        if (err.status === 401) {
          alert('Invalid email or password.');
        } else if (err.error && err.error.message) {
          alert(err.error.message);
        } else {
          alert('An unexpected error occurred. Please try again.');
        }
      }
    });
  }
  
  onvenderLogin(){
     console.log(this.user);
     this.v_service.onlogin(this.user).subscribe({
      next:(res)=>{
        this.router.navigate(['/vender/view']);
      },
      error:(err)=>{
          console.log("Login Failed: ",err);
          if (err.status === 401) {
            alert('Invalid email or password.');
          } else if (err.error && err.error.message) {
            alert(err.error.message);
          } else {
            alert('An unexpected error occurred. Please try again.');
          }
      }
   
  });
     
  }
}

