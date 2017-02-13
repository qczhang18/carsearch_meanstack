import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from './car';

@Injectable()
export class CarService {
  
  private headers = new Headers({'Content-Type': 'application/json'});
  private carsApiUrl = '/api/car/30144';
  
  constructor(private http: Http) { }
    
  getCars(): Promise<Car[]> {
    return this.http.get(this.carsApiUrl)
               .toPromise()
               .then(response => response.json() as Car[])
  }
}