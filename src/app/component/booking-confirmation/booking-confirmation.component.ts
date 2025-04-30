import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  car={
  "carId":"" ,
  "carNumber": "",
  "carName": "",
  "carPassing": " rto",
  "agencyName": "om  ram",
  "purchaseYear": "" ,
  "seaters": "",
  "acType": "",
  "description": "",
  "carImagePath": "",
  "vendorId": ""
  }
  user={
  "userId": '',
  "username": "",
  "email": "",
  "password": "",
  "phoneNumber": "",
  "address": ""
  }
  carId:any
  userdata:any
  constructor(private router:ActivatedRoute,private service:VenderapiService){

  }
   
  ngOnInit(): void {
      this.carId= this.router.snapshot.paramMap.get('id');
      this.getCar()
      this.getUser()
    
  }
  getCar(){
         this.service.getCarById(this.carId).subscribe({
           next:(res:any)=>{
          console.log(res);
          
              this.car=res
           },
           error:(err)=>{
            
           }
           
         });
  }
  getUser(){

       this.user= JSON.parse(sessionStorage.getItem("loggedInUser") || '{}')
       console.log(this.user);
       

  }


}
