import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-car-upload',
  templateUrl: './car-upload.component.html',
  styleUrls: ['./car-upload.component.css']
})
export class CarUploadComponent {
 
  car = {
    "CarName": "",
    "CarNumber": "",
    "CarPassing": "",
    "AgencyName": "",
    "PurchaseYear": "",
    "Seaters": "",
    "AcType": "",
    "Description": "",
    "CarImage": null as File | string | null,
    "VenderId": ""
  }
  constructor(
    private service: VenderapiService,
    private router: Router
  ) {
    this.car.VenderId = sessionStorage.getItem("id") || ""; // or Number(vendorId)
    console.log(  this.car.VenderId);
    
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.car.CarImage = file;
    }
  }


  addCar() {
    if (!this.car.CarImage) {
      alert("Please select an image");
      return;
    }
  
    const data = this.car;
    console.log("Car data:", data);
  
    const formData = new FormData();
    formData.append('CarName', data.CarName);
    formData.append('CarNumber', data.CarNumber);
    formData.append('CarPassing', data.CarPassing);
    formData.append('AgencyName', data.AgencyName);
    formData.append('PurchaseYear', data.PurchaseYear.toString());
    formData.append('Seaters', data.Seaters.toString());
    formData.append('AcType', data.AcType);
    formData.append('Description', data.Description);
    formData.append('VenderId', data.VenderId);
  
    if (data.CarImage instanceof File) {
      formData.append('CarImage', data.CarImage, data.CarImage.name);
    }
  
    //  Call API
    this.service.addCar(formData).subscribe(
      (res: any) => {
        console.log("Server Response:", res);
        alert("Car Added Successfully");
        this.router.navigate(['/vender/view']);
      },
      (error: any) => {
        console.error("Error from server:", error);
        alert("Error adding car");
      }
    );
  }
  
}