var q = require('q');
var Coverage = require('../models/coverage');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Coverage methods
    router.post("/coverage", function(request, response) {
        var coverages = request.body.coberturas;
        if (!(JSON.stringify(coverages) == '{}' || !coverages)) {
            response.status(200).json({valid:Coverage.checkCoverages(coverages)});
            return;
        }
        response.status(510).json({
            message: "Ha surgido un error, favor contactar al integrador"
        });

    });

    app.use(router);

}