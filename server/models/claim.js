'use strict'

var seguros = require('./seguros');
var _ = require('underscore');

class Claim {

	constructor(claimRequest) {
		this.convenioAjuste = {
			cliente: claimRequest.cliente,
			poliza: claimRequest.poliza,
			siniestro: claimRequest.siniestro
		};
		this.changesRequired = this.calculateChanges();
	}
	
	calculateChanges(){
		var result = Math.round(Math.random(0,2)) == 0 ? false: true;
		return result;
	}

}

module.exports = Claim;