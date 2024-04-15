import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    RestaurantCardComponent,
    OfferCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RestaurantCardComponent,
    OfferCardComponent
  ]
})
export class SharedModule { }
