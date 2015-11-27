'use strict'

var _ = require('underscore');

class Policy {

    constructor(producto) {
        this.fechaEmision = new Date();
        this.vigencia = 365;
        this.noPoliza = this.makeId(5);
        this.seguro = producto;
        this.factura = this.generateFactura(producto);
    }

    makeId(length) {
        var text = '';
        var possible = "0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    generateFactura(seguro) {
        var date = new Date();
        date.setDate(date.getDate() + 365);
        var factura = {
            noFactura: this.makeId(4),
            fechaEmision: new Date(),
            fechaVencimiento: date,
            montoFactura: seguro.precio
        };
        return factura;
    }

}
module.exports = Policy;