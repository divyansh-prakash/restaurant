import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  restaurantDetails: Array<any> = [];
  offerDetails: Array<any> = [];

  ngOnInit() {
    this.getRestaurantDetails();
    this.getOfferDetails();
    
  }

  getRestaurantDetails(){
    this.restaurantDetails.push({
      name: "McDonald's",
      rating: '4.3',
      categories: ['North Indian', 'Fast Food', 'Deserts'],
      distance: '3.9 Kms',
      deliveryCharge: 'KWD 20',
      imgUrl: 'assets/images/burger.jpeg'
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
