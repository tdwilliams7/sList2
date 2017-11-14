const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride =require('method-override');
const mongoURI = 'mongodb://admin:fakepass@ds155695.mlab.com:55695/grocpricelist';
const moment = require('moment');

mongoose.connection.openUri(mongoURI);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var Food = mongoose.model('Food', {
    name: String,
    price: Number,
    date: {type: String, default: ' '}
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
        'price' : req.body.price,
        'date' : req.body.date
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
app.listen(process.env.PORT || 5000);
console.log('listening on port 5000');