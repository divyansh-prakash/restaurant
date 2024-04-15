import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  restaurantDetails: Array<any> = [];
  offerDetails: Array<any> = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRestaurantDetails();
    this.getOfferDetails();
  }

  getRestaurantDetails() {
    this.http.get('../../../assets/restaurant-list.json').subscribe((respose: any) => {
      if (respose){
        this.restaurantDetails.push(...respose);
      }
    })
  }

  getOfferDetails() {
    this.offerDetails.push({
      offerValue: 'KWD 200 Off',
      offerDesc: 'Get off upto 200 on delivery charges',
      imgUrl: 'assets/images/offerCard1.jpg'
    })

    this.offerDetails.push({
      offerValue: 'Flat 20% Off',
      offerDesc: 'Get upto 20% Off on your first order',
      imgUrl: 'assets/images/offerCard3.png'
    })
  }
}
