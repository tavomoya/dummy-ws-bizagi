var q = require('q');
var Utils = require('../utils');
var Policy = require('../models/policy');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Policy methods
    router.post("/policy", function(request, response) {
        var solicitud = request.body;
        console.log("Lo que llega:", solicitud);
        if (!(JSON.stringify(solicitud) == '{}' || !solicitud)) {
            if (solicitud.producto != null) {
                var policy = new Policy(solicitud.producto);
                response.status(200).json(policy);
                console.log("Lo que se vá:", policy);
                return;
            }
            response.status(200).json({
                message: "Producto requerido"
            });
            return;
        }
        response.status(510).json({
            message: "Ha surgido un error, favor contactar al integrador"
        });
    });

    app.use(router);

}