var Cars = require('../models/carModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/car/:uname', function(req, res) {

        Cars.find({ zipcode: req.params.uname }, function(err, cars) {
            if (err) throw err;

            res.send(cars);
        });

    });

    app.get('/api/car/:id', function(req, res) {

       Cars.findById({ _id: req.params.id }, function(err, car) {
           if (err) throw err;

           res.send(car);
       });

    });

    // app.post('/api/todo', function(req, res) {

    //     if (req.body.id) {
    //         Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
    //             if (err) throw err;

    //             res.send('Success');
    //         });
    //     }

    //     else {

    //        var newTodo = Todos({
    //            username: 'test',
    //            todo: req.body.todo,
    //            isDone: req.body.isDone,
    //            hasAttachment: req.body.hasAttachment
    //        });
    //        newTodo.save(function(err) {
    //            if (err) throw err;
    //            res.send('Success');
    //        });

    //     }

    // });

    // app.delete('/api/todo', function(req, res) {

    //     Todos.findByIdAndRemove(req.body.id, function(err) {
    //         if (err) throw err;
    //         res.send('Success');
    //     })

    // });

}
