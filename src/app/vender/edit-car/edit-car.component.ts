import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  carId: any;
    car = {
      "carName": "",
      "carNumber": "",
      "carPassing": "",
      "agencyName": "",
      "purchaseYear": "",
      "seaters": "",
      "acType": "",
      "description": "",
      "carImage": null as File | string | null,
      "carImagePath": "",
      "venderId": ""
    }


  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: VenderapiService
  ) {
    const vendorId = sessionStorage.getItem("id");
    if (vendorId) {
      this.car.venderId = vendorId; // or Number(vendorId)
    }
  }

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('id');
    // Get vendorId from sessionStorage (or wherever you're storing it)
    this.getCar();
  }

  getCar() {
    this.service.getCarById(this.carId).subscribe((data: any) => {
      this.car = data;
    })
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.car.carImage = file;
    }
  }

  updateCar() {
    // Remove image path
    delete (this.car as any).carImagePath;

    const data = this.car;
    const formData = new FormData();
    formData.append('carName', data.carName);
    formData.append('carNumber', data.carNumber);
    formData.append('carPassing', data.carPassing);
    formData.append('agencyName', data.agencyName);
    formData.append('purchaseYear', data.purchaseYear.toString());
    formData.append('seaters', data.seaters.toString());
    formData.append('acType', data.acType);
    formData.append('description', data.description);
    formData.append('venderId', sessionStorage.getItem("id") || ''); // Use sessionStorage to get the vendorId
   console.log("vender id ", sessionStorage.getItem("id"));
   
    if (data.carImage && typeof data.carImage !== 'string') {
        formData.append('carImage', data.carImage, data.carImage.name);
    }

    console.log('formData before sending:', formData);

    this.service.updateCar(this.carId, formData).subscribe({
      next: (data) => {
        alert("Car updated successfully");
        this.router.navigate(['/vender/view']);
      },
      error: (err) => {
        console.error("Update failed:", err);
        alert("Car not updated");
      }
    });
  }


}
