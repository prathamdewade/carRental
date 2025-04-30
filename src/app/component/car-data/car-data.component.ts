import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit{
  venderId:any
  cardata = {
    car: [
      {
        carId:'',
        carName: "",
        carNumber: "",
        carPassing: "",
        agencyName: "",
        purchaseYear: "",
        seaters: "",
        acType: "",
        description: "",
        carImage: null as File | string | null,
        carImagePath: "",
        venderId: ""
      }
    ]
  };
  vendor={
    "vendorId": '',
    "ownerName": "",
    "email": "",
    "password": "",
    "phoneNumber": "",
    "address": "",
    "agencyName": ""
  }
  
  

  constructor( private service:VenderapiService,
      private route:ActivatedRoute, )
    {
       
    }
   ngOnInit(): void {
    this.venderId= this.route.snapshot.paramMap.get('id');
    this.getCar();
        this.service.getVendor(this.venderId).subscribe(
          (res: any)=>{
                  this.vendor=res;
          }
        )
   }
    getCar(){
       this.service.getAllCarDataByVenderId(this.venderId).subscribe({
        next:(res)=>{
        if (Array.isArray(res)) {
          this.cardata.car = res; // ✅ works if res is an array
          console.log(this.cardata);
          
        }
      },
      error: (err) => {
        console.error("Error fetching cars", err);
      }
    });
  }
  
  
   }
