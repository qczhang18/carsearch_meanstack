var Cars = require('../models/carModel');

module.exports = function(app) {
   app.get('/api/setupCars', function(req, res) {
      // seed database
       var starterCars = [
           {
               zipcode: 30144,
               make: 'Nissan',
               model: '2014 Maxima',
               miles: 32000,
               image: 'http://www.placecage.com/200/200',
               contact: 'John Doe'
           },
           {
               zipcode: 30144,
               make: 'Toyota',
               model: '2012 Camry',
               miles: 54000,
               image: 'http://www.placecage.com/200/200',
               contact: 'John Smith'
           },
           {
               zipcode: 30071,
               make: 'Honda',
               model: '2015 Accord',
               miles: 28000,
               image: 'http://www.placecage.com/200/200',
               contact: 'Jane Doe'
           },
           {
               zipcode: 30022,
               make: 'Honda',
               model: '2014 Accord',
               miles: 38000,
               image: 'http://www.placecage.com/200/200',
               contact: 'Emma Doe'
           }
       ];
       Cars.create(starterCars, function(err, results) {
           res.send(results);
       });
   });
}
