'use strict';
var seguros = require('./seguros');
var _ = require('underscore');

class Coverage {

    constructor() {

    }

    static checkCoverages(coverages) {
        var result = false;
        coverages.forEach(function(coverage) {
            for (var seguro in seguros) {
                var response = _.findWhere(seguros[seguro].coberturas, coverage);
                if (response != null) {
                    result = true;
                }
            }
        });
        return result;
    }
}

module.exports = Coverage;