var q = require('q');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Reconcile methods
    router.get("/reconcile", function(request, response) {
        response.status(200).json({
            reconcile: true
        });
    });

    app.use(router);

}