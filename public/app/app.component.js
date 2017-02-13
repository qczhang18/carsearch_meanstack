"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var car_service_1 = require('./car.service');
var AppComponent = (function () {
    function AppComponent(carService) {
        this.carService = carService;
    }
    AppComponent.prototype.getCars = function () {
        var _this = this;
        this.carService.getCars().then(function (cars) { return _this.cars = cars; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Car List</h1>\n  <ul>\n      <li *ngFor=\"let car of cars\">\n        {{car.make}} - {{car.model}}\n      </li>\n    </ul>",
            providers: [car_service_1.CarService]
        }), 
        __metadata('design:paramtypes', [car_service_1.CarService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map