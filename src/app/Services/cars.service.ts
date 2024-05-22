import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {


  constructor(private _HTTPClient: HttpClient) { }

  getAllCars(): Observable<any> {
    return this._HTTPClient.get('https://freetestapi.com/api/v1/cars');
  }

  getLimitedCars(limit: number): Observable<any>{
    return this._HTTPClient.get(`https://freetestapi.com/api/v1/cars?limit=${limit}`);
  }
  getCarById(id: number): Observable<any>{
    return this._HTTPClient.get(`https://freetestapi.com/api/v1/cars/${id}`);
  }


}
