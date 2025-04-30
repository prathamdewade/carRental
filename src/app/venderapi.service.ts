import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenderapiService {

  constructor(private http: HttpClient, private router: Router) {

  }
  onRegister(vender: any) {
    return this.http.post('https://localhost:7049/api/Vendor/register',vender, {responseType: 'text'});
  }
  getCarById(id: any) {

    return this.http.get('https://localhost:7049/api/Car/' +id);
  }
  updateCar(id: any, car: any) {
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
  getAllCarDataByVenderId(id: any) {
    console.log(id);

    return this.http.get('https://localhost:7049/api/Car/vendor/' + id)
  }
  
  addCar(CarDtos: any) {
    console.log(CarDtos);
    
    return this.http.post('https://localhost:7049/api/Car/add-car', CarDtos, { responseType: 'text' })
  }
  getAllVenders(){
    return this.http.get('https://localhost:7049/api/Vendor/all');
  }
  getVendor(id:any){
     return this.http.get('https://localhost:7049/api/Vendor/' +id)
  }
}
