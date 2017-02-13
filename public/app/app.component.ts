import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-app',
  template: `<h1>Car List</h1>
  <ul>
      <li *ngFor="let car of cars">
        {{car.make}} - {{car.model}}
      </li>
    </ul>`,
  providers: [ CarService ]
})
export class AppComponent  { 
  cars: Car[];
  constructor(private carService: CarService) { }
  getCars(): void {
    this.carService.getCars().then(cars => this.cars = cars);
  }
  ngOnInit(): void {
    this.getCars();
  }
}
