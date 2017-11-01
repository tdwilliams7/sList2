var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Food = require('./api/models/priceListModel');
var bodyParser = require('body-parser');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/priceList', {useMongoClient: true});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/priceListRoutes');
routes(app);

app.get('/', (req, res) => {
    res.sendFile('/Users/troywilliams/Desktop/sList2/home.html');
    console.log('stuff is not loading');
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});