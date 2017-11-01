'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema ({
    name: {
        type: String,
        required: 'enter the name of the task'
    },
    price: {
        type: Number,
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Foods', foodSchema);
