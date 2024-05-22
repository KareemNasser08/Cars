import { Component, ElementRef } from '@angular/core';
import { Car } from 'src/app/Model/car';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-show-all-cars',
  templateUrl: './show-all-cars.component.html',
  styleUrls: ['./show-all-cars.component.scss']
})
export class ShowAllCarsComponent {

  allCars: Car[] = []
  constructor(private _carsService: CarsService) {
    this.getAllCars();
  }

  getAllCars() {
    this._carsService.getAllCars().subscribe({
      next: (res) => {
        console.log(res);
        this.allCars = res;
      }, error: (err) => {
        console.log(err);
      }, complete: () => {
        console.log('Completed Data');
      }
    })
  }


}
