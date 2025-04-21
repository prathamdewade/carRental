import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenderapiService {

  constructor(private http: HttpClient, private router: Router) {

  }
  onRegister(vendor: any) {
    return this.http.post('https://localhost:7049/api/Vendor/register', vendor, {
      responseType: 'text'
    });
  }
  getCarById(id: any) {

    return this.http.get('https://localhost:7049/api/Car/'+ id);
  }
  updateCar(id :any,car: any) { 
    console.log(car)
    return this.http.put('https://localhost:7049/api/Car/update/' + id, car, {
      responseType: 'text'
    });

  }
  onlogin(vendor: any) {
    return this.http.post('https://localhost:7049/api/Vendor/login', vendor, {
      responseType: 'text'
    })
  }
  getAllCarDataByVenderId(id :any){
    return this.http.get('https://localhost:7049/api/Car/get-car-vender-id/'+id)
  }

  onregisterproduct(product: any) {
  }
}
