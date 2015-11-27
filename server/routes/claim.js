var q = require('q');
var Claim = require('../models/claim');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Claim methods
    router.post("/claim", function(request, response) {
        var claimRequest = request.body;
         if (!(JSON.stringify(claimRequest) == '{}' || !claimRequest)) {
             response.status(200).json(new Claim(claimRequest));
             return;
         }
        response.status(510).json({
            message: "Ha surgido un error, favor contactar al integrador"
        });
    });

    app.use(router);

}