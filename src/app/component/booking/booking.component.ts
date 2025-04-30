import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { VenderapiService } from 'src/app/venderapi.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  carId: any;

  car = {
    carId: "",
    carNumber: "",
    carName: "",
    carPassing: "",
    agencyName: "",
    purchaseYear: "",
    seaters: "",
    acType: "",
    description: "",
    carImagePath: "",
    vendorId: 0
  };

  user = {
    id: "",
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: ""
  };

  bookingCustomer = {
    pickupLocation: '',
    dropLocation: '',
    date:'',
    carId: '',
    userId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private service: VenderapiService,
    private router: Router,
    private services: BookingService
  ) {}

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    const role = sessionStorage.getItem('userRole');
    console.log(role);

    if (role == null) {
      this.router.navigate(['/auth/']);
    }

    this.getCar();
    this.getUser();
  }

  getCar() {
    this.service.getCarById(this.carId).subscribe((res: any) => {
      this.car = res;
      console.log(this.car);
    });
  }

  getUser() {
    this.user = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    console.log(this.user);
  }

  onBooking(data: any) {

    const bookingData = {
      pickupLocation: this.bookingCustomer.pickupLocation,
      dropLocation: this.bookingCustomer.dropLocation,
      date: this.bookingCustomer.date,
      carId: Number(this.carId),     // convert to number if needed
      userId: this.user.id
    };
   
     
       
   // console.log("Booking Data =>", formData);

    this.services.customerBooking(bookingData).subscribe({
      next: (res: any) => {
        console.log("Booking successful:", res);
        this.bookingCustomer = res;
        this.router.navigate(['/booking-conformation']);
      },
      error: (err) => {
        alert('Booking failed! Try again');
        console.log(err);
        
      }
    });
  }

}
