import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
    isLogin:any = false;
     constructor(private service : UserApiService){
      
     }

     async ngOnInit(){
      this.isLogin=await localStorage.getItem("ISLOG");
      console.log(this.isLogin);
     }
     onLogOut(){
        this.service.userLogOut();
        this.isLogin=false;
     }
}
