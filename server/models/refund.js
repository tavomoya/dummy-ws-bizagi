'use strict'
var _ = require('underscore');

class Refund {

	constructor(refundRequest){
		this.cliente = refundRequest.cliente;
		this.montoDevolucion = this.calculateRefundAmount(refundRequest.poliza);
		this.fechaEmision = new Date();
	}

	calculateRefundAmount(poliza){
		var fechaVencimientoPoliza = new Date(poliza.factura.fechaVencimiento);
		var remainingDays = this.daysBetweenDates(new Date(),fechaVencimientoPoliza);
		var remainingMonths = Math.round(remainingDays/30);
		var monthlyPayment = poliza.seguro.precio / 12;
		console.log("Meses restantes: ",remainingMonths, " Pagos mensuales: ",monthlyPayment)
		return remainingMonths * monthlyPayment;

	}

	daysBetweenDates(date1, date2){
		var oneDay = 24*60*60*1000;
		return Math.round(Math.abs((date1.getTime() - date2.getTime())/(oneDay)));
	}

}
module.exports = Refund;