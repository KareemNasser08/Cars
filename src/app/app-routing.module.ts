import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PopularRentalComponent } from './Components/popular-rental/popular-rental.component';
import { HowItWorkComponent } from './Components/how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './Components/why-choose-us/why-choose-us.component';
import { ShowAllCarsComponent } from './Components/show-all-cars/show-all-cars.component';
import { ShowCarDetailsComponent } from './Components/show-car-details/show-car-details.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'rentaldeals', component: PopularRentalComponent},
  {path:'howitwork', component: HowItWorkComponent},
  {path:'whychooseus', component: WhyChooseUsComponent},
  {path:'showallcars', component: ShowAllCarsComponent},
  {path:'showcardetails/:id', component: ShowCarDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
