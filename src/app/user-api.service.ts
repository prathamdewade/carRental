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
   return this.http.post('https://localhost:7049/api/User/register',user,{ responseType: 'text'});
  }
  userLogin(user : any){
    return this.http.post('https://localhost:7049/api/User/login',user,{ responseType: 'text'});
  }
  getProfileData(id:any){
    
  }
  userLogOut(){
    userdata:undefined;
  
     this.router.navigate(["/auth"])
  }

}
