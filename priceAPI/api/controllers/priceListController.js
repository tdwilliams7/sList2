'use strict';

var mongoose = require('mongoose');
var Food = mongoose.model('Foods');

exports.list_all_items = function(req, res) {
    Food.find({}, function(err, food){
        if(err){
            res.send(err);
        }
        res.json(food);
    });
};

exports.create_an_item = function(req, res) {
    var new_item = new Food(req.body);
    new_item.save(function(err, food){
        if (err){
            res.send(err);
        }
        res.json(food);
    });
};

exports.read_an_item = function(req, res) {
    Food.findById(req.params.foodId, function(err, food){
        if (err){
            res.send(err);
        }
        res.json(food);
    });
};

exports.update_an_item = function(req, res){
    Food.findOneAndUpdate({_id: req.params.foodId}, req.body, {new: true}, function(err, food){
        if (err){
            res.send(err);
        }
        res.json(food);
    });
};

exports.delete_an_item = function(req, res) {
    Food.remove({_id: req.params.foodId}, function(err, Food){
        if (err){
            console.log(_id);
            res.send('nope' + err);
        }
        res.json({message: 'Item removed'});
    });
};
