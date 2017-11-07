const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride =require('method-override');
const mongoURI = 'mongodb://admin:fakepass@ds243335.mlab.com:43335/grocerypricelist';



mongoose.connection.openUri(mongoURI);

// mongoose.connect('mongodb://admin:fakepass@ds243335.mlab.com:43335/grocerypricelist', {useMongoClient: true}, (err, database) => {
//     if (err) return console.log(err);
//     db = database;
//     app.listen(3000, function(){
//         console.log('listening on 3000');
//     });
// });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var Food = mongoose.model('Food', {
    name: String,
    price: Number
});


app.get('/foods', (req, res) => {
    Food.find(function (err, foods) {
        if (err)
            return console.log(err);
        res.json(foods);
    });
});

app.delete('/foods/:food_id', function(req, res){
    Food.remove({
        _id: req.params.food_id
    }, function(err, food){
        if (err)
            res.send(err);
        Food.find(function(err, foods){
            if (err)
                res.send(err);
            res.json(foods);
        });
    });
});

app.post('/foods', function(req, res){
    Food.create({
        'name' : req.body.name,
        'price' : req.body.price
    }, function(err, food){
        if (err)
            res.send(err);
        Food.find(function(err, foods){
            if (err)
                res.send(err);
            res.json(foods);
        });
    });
});
app.listen(3000);
console.log('listening on port 3000');