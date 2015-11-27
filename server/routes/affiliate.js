var q = require('q');
var Utils = require('../utils');
var morgan = require('morgan');
var router = require('express').Router();

module.exports = function(app) {

    // Add the Crud's web services
    // router = require('./crud')(prefix, personSchema);

    router.use(morgan('combined'));

    // Affilate methods
    router.post("/affiliate", function(request, response) {
        var tomador = request.body;
        if (!(JSON.stringify(tomador) == '{}')) {
            if (tomador.edad >= 18 && tomador.edad < 55) {
                if (tomador.ingresos >= 12000) {
                    response.status(200).json({
                        afiliado: true
                    });
                    return;
                }
            }
            response.status(200).json({
                afiliado: false
            });
            return;
        }
        response.status(510).json({
            message: "Ha surgido un error, contactarse con el integrador"
        });
        return;
    });

    app.use(router);

}