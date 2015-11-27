'use strict';
var seguros = require('./seguros');
var _ = require('underscore');

class Quotation {

    constructor(producto) {
        this.valorPrima = producto.precio * 0.25;
        this.valorPrimaAnual = producto.precio;
        this.nombreServicio = producto.nombre;
        this.nombreAseguradora = "Aseguradora";
    }

    static quotateFromProducts(products) {
        var quotations = [];
        products.forEach(function(product) {
            quotations.push(new Quotation(product));
        });
        return quotations;
    }

    static getQuotation(coberturas) {
        var productos;
        for (var cobertura in coberturas) {
            productos = _.filter(seguros, function(seguro) {
            	var decision = _.findWhere(seguro.coberturas, coberturas[cobertura]);
                if (decision) {
                    return seguro;
                }
            });
        }
        return this.quotateFromProducts(productos);
    }

}
module.exports = Quotation;