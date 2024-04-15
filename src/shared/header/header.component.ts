import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userInfo = {
    address: {
      city: 'Noida',
      street: 'Kaka House, 4th Floor'
    },
    imgUrl: '',
    cartItems: 5
  }
}
