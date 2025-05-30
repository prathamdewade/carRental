import { Component } from '@angular/core';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent {
  id: any;
  v_cars = {
    "cars": [
      {
        "carId": "",
        "carImagePath": "",
        "carName": "",
        "carNumber": "",
        "carPassing": "",
        "agencyName": "",
        "purchaseYear": "",
        "seaters": "",
        "acType": "",
        "description": "",
        "vendorId" :""
      }
    ]
  }
  constructor(private service: VenderapiService) {
    this.id = sessionStorage.getItem("id");
    console.log(this.id);
    
    if (this.id) {
      this.service.getAllCarDataByVenderId(this.id).subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.v_cars.cars = res;
         console.log();
         
          console.log(res);
          
        } else {
          this.v_cars.cars = [res];
        }
        console.log(this.v_cars.cars);
      });
    }
    console.log(this.v_cars);
    
    
    
  }


  onEdit(car: any) {
    console.log("Editing car:", car);
    // You can route to edit page or open a modal here
  }
  
  onDelete(car: any) {
    console.log("Deleting car:", car);
    // Add confirmation and delete logic here
  }
}
