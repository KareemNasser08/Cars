import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/Model/car';
import { CarsService } from 'src/app/Services/cars.service';

@Component({
  selector: 'app-show-car-details',
  templateUrl: './show-car-details.component.html',
  styleUrls: ['./show-car-details.component.scss']
})
export class ShowCarDetailsComponent {

  carId: number = 0;
  carData!: Car;

  constructor(private _activatedRoute: ActivatedRoute, private _carsService: CarsService) {
    this.carId = _activatedRoute.snapshot.params['id'];
    this.getCarById(this.carId);
  }

  getCarById(id: number) {
    this._carsService.getCarById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.carData = res;
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        console.log('Completed Request');

      },
    })
  }
}
