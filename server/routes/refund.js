var q = require('q');
var Refund = require('../models/refund');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Refund methods
    router.post("/refund", function(request, response) {
        var refundRequest = request.body;
        if (!(JSON.stringify(refundRequest) == '{}' || !refundRequest)) {
            response.status(200).json(new Refund(refundRequest));
            return;
        }
        response.status(510).json({
            message: "Ha surgido un error, favor contactar al integrador"
        });

    });

    app.use(router);

}