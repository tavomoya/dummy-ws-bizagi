var q = require('q');
var quotation = require('../models/quotation');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Quotation methods
    router.post("/quotate", function(request, response) {
        if (!(JSON.stringify(request.body) == '{}' || !request.body)) {
            var a = quotation.getQuotation(request.body.coberturas);
            response.status(200).json(a);
            return;
        }
        response.status(510).json({
            message: "Ha surgido un error, favor contactar al integrador"
        });

    });

    app.use(router);

}