import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PopularRentalComponent } from './Components/popular-rental/popular-rental.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HowItWorkComponent } from './Components/how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './Components/why-choose-us/why-choose-us.component';
import { ShowAllCarsComponent } from './Components/show-all-cars/show-all-cars.component';
import { ShowCarDetailsComponent } from './Components/show-car-details/show-car-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PopularRentalComponent,
    HowItWorkComponent,
    WhyChooseUsComponent,
    ShowAllCarsComponent,
    ShowCarDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
