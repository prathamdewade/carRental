import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/user-api.service';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit  {
   id:any
      infoData = {
      vender: [
        {
          vendorId: "",
          agencyName: "",
          phoneNumber: "",
          address: ""
        }
      ]
    };
  
 
   constructor(private service : VenderapiService, private router:Router){
     
   }

   vendorData: any;

   ngOnInit(): void {
    //  const storedVendor = sessionStorage.getItem('id');
 
    //  if (storedVendor) {
    //    this.vendorData = JSON.parse(storedVendor); 
    //    console.log("Agency Name:", this.vendorData.agencyName);
    //  } else {
    //    console.log("No vendor found in sessionStorage");
    //  }
     this. getAllVendor()
   }

   getAllVendor(){
    this.service.getAllVenders().subscribe({
      next:(res)=>{
       if (Array.isArray(res)) {
         this.infoData.vender=res;
         console.log(this.infoData)
     
                   
       }
      },
      error :(err)=>{

      }

      })
   }
}
