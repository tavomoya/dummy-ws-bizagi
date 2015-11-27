var q = require('q');
var Remittance = require('../models/remittance');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Remittance methods
    router.post("/remittance", function(request, response) {
        var policies = request.body.polizas;
        if (!(JSON.stringify(policies) == '{}' || !policies)) {
            var remittances = Remittance.generateRemittances(policies);
            response.status(200).json(remittances);
            return;
        }
        response.status(510).json({
            message: "Ha surgido un error, favor contactar al integrador"
        });
    });

    app.use(router);

}