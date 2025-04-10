import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  selectedCab: any = null;

  islogin:any
  ngOnInit(){
      this.islogin = true;
  }
   
  cabOptions: any = {
    'AC Cab': {
      name: 'Swift Dzire',
      type: 'AC',
      seats: 4,
      rent: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHq8PdkMOxTJU7Yht0plI4ZMIgfwjDoaY-A&s'
    },
    'Non-AC Cab': {
      name: 'Tata Indica',
      type: 'Non-AC',
      seats: 4,
      rent: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA_SaA6HfBbGJhHpnHOT5dc6qeTECAietZDQ&s'
    },
    '4-Seater': {
      name: 'Ertica',
      type: 'AC',
      seats: 4,
      rent: 11,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcsaBnYnUzlmOXE6Hwl8Kw1XosHfek855hw&s'
    },
    '7-Seater SUV': {
      name: 'Toyota Innova',
      type: 'AC',
      seats: 7,
      rent: 15,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mT52Mei9AvnBUq_HGT4GztpRskFcK6DAvg&s'
    },
    'Luxury Sedan': {
      name: 'Honda Accord',
      type: 'AC',
      seats: 5,
      rent: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4CeMKVmDS8yr3vG0TH7wnkF5hxwYcvCTZQ&s'
    },
    'Tempo Traveller': {
      name: 'Tempo Traveller 12-Seater',
      type: 'AC',
      seats: 12,
      rent: 18,
      image: 'https://rightcabs.com/wp-content/uploads/2020/10/Tempo-Traveller-3-600x350.jpg'
    }
  };

  selectCategory(category: string) {
    this.selectedCab = this.cabOptions[category];
  }
}
