import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user={
    userName: "",
    email: "",
    password: ""
  }
  cPassword : any;
  constructor(private service : UserApiService ,
    private router :Router
  ){}

  registerData(){
     
     
      if(this.cPassword==this.user.password){
        this.service.userRegister(this.user).subscribe(
          (res)=>{
            this.router.navigate(['/user-index']);
          }
        )   
      }
      console.log('hii');
  }

}
