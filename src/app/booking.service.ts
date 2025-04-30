import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http :HttpClient) { }

    
customerBooking(data:any){
  return this.http.post('https://localhost:7049/api/Booking/carBooking',data);
}

}
