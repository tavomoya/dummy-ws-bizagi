var q = require('q');
var Utils = require('../utils');
var personSchema = require('../models/person');
var router = require('express').Router();
var prefix = '/person';

module.exports = function (app) {
	
	// Add the Crud's web services
	router = require('./crud')(prefix, personSchema);

	app.use(router);
}