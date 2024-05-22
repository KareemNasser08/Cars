import { Component, OnChanges, OnDestroy } from '@angular/core';
import { Car } from 'src/app/Model/car';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-popular-rental',
  templateUrl: './popular-rental.component.html',
  styleUrls: ['./popular-rental.component.scss']
})
export class PopularRentalComponent {

  allCars: Car[] = [];
  limitCars: Car[] = [];
  limitInput: number = 3;

  constructor(public _carsService: CarsService) {
    this.getLimitedCars();
    // this.getAllCars();
  }

  getAllCars() {
    this._carsService.getAllCars().subscribe({
      next: (res) => {
        this.allCars = res;
        console.log(this.allCars);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed data');
      }
    })
  }

  getLimitedCars() {
    this._carsService.getLimitedCars(this.limitInput).subscribe({
        next: (res) => {
          this.allCars = res;
          console.log(this.allCars);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed data');
        }
      }
    )
  }

}
