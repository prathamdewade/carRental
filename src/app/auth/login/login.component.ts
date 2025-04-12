import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';

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

   constructor(private service : UserApiService,private router : Router){}
 
  onLogin(){
   
   console.log(this.user);
    
   this.service.userLogin(this.user).subscribe(
    (res)=>{
      this.router.navigate(["/user-index"]);
    }

   )    
  }
}

