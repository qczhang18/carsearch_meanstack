var Cars = require('../models/carModel');

module.exports = function(app) {
   app.get('/api/setupCars', function(req, res) {
      // seed database
       var starterCars = [
           {
               zipcode: 30144,
               make: 'Toyota',
               model: '2014 Camry',
               miles: 20800,
               image: 'http://www.placecage.com/200/200',
               contact: 'Jim Doe'
           },
           {
               zipcode: 30096,
               make: 'Toyota',
               model: '2012 Camry',
               miles: 54500,
               image: 'http://www.placecage.com/200/200',
               contact: 'John Jay'
           },
           {
               zipcode: 30096,
               make: 'Honda',
               model: '2015 Accord',
               miles: 21000,
               image: 'http://www.placecage.com/200/200',
               contact: 'Jane Doe'
           },
           {
               zipcode: 30022,
               make: 'Honda',
               model: '2016 Accord',
               miles: 18000,
               image: 'http://www.placecage.com/200/200',
               contact: 'Emma Doe'
           }
       ];
       Cars.create(starterCars, function(err, results) {
           res.send(results);
       });
   });
}
