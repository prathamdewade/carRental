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
