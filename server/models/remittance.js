'use strict'

var _ = require('underscore');
var COMISSION = 0.20;

class Remittance {

    constructor(policy) {
        this.policy = policy;
        this.montoComision = policy.seguro.precio * COMISSION;
    }

    static generateRemittances(policies) {
    	var remittances = [];
        policies.forEach(function(policy) {
        	remittances.push(new Remittance(policy));
        });
        return remittances;
    }
}
module.exports = Remittance;