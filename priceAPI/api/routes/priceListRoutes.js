'use strict';
module.exports = function(app){
    var priceList = require('../controllers/priceListController');

    app.route('/foods')
        .get(priceList.list_all_items)
        .post(priceList.create_an_item);

    app.route('/foods/:foodId')
        .get(priceList.read_an_item)
        .put(priceList.update_an_item)
        .delete(priceList.delete_an_item);

};