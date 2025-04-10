import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http:HttpClient, private router : Router) { 
 
  }
   
  userRegister(user : any){
   return this.http.post('https://localhost:7049/api/User/register',user);
  }
  userLogin(user : any){
    return this.http.post('https://localhost:7049/api/User/login',user);
  }
  userLogOut(){
    userdata:undefined;
    localStorage.setItem("ISLOG","false");  
     this.router.navigate(["/auth"])
  }

}
