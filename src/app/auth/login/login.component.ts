import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user ={
  "email": "",
  "password": ""
}
isLog= false;
   constructor(private service : UserApiService,private router : Router){}
  islogin:any
   ngOnInit(){
       this.islogin = false;
   }

  onLogin(){
   this.isLog=true;
   localStorage.setItem("ISLOG", this.isLog.toString());
   console.log(this.user);
    
   this.service.userLogin(this.user).subscribe(
    (res)=>{
      this.router.navigate(["/user-index"]);
    }

   )    
  }
}

