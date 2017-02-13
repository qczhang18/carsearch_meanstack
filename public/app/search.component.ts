import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  moduleId: module.id,
  selector : 'search',
  templateUrl : 'search.template.html',
  styleUrls: ['search.component.css']
})

export class SearchComponent {
  link = 'https://qczhang18-carsearch.herokuapp.com/api/car/';
  http: Http;
  giphies = [];

//  https://qczhang18-carsearch.herokuapp.com/api/car/ 
  
  constructor(http: Http) { 
    this.http = http; 
  }

  performSearch (searchTerm: HTMLInputElement) : void {
    // console.log(`User entered: ${searchTerm.value}`);
    var apiLink = this.link + searchTerm.value;

    this.http.request(apiLink)
        .subscribe((res: Response) => {
            this.giphies = res.json().data;
            console.log(res.json());
        });
   }
}