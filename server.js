const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var db;

MongoClient.connect('mongodb://localhost/priceList',  (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3000, function(){
        console.log('listening on 3000');
    });
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.get('/foods', (req, res) => {
    db.collection('foods').find().toArray(function (err, result) {
        if (err) return console.log(err);
        res.send(result[0]._id);
    });
});

// app.post('/foods', (req, res) =>{

// })