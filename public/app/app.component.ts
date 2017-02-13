import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-app',
  template: `
          <header class="row">
            <nav class="col-md-8 col-md-offset-2">
              <ul class="nav nav-pills">
                <li> stuff </li>
              </ul>
            </nav>
          </header>
         <h1>Car List</h1>
           <search> search </search>
         `,
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
