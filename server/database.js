'use strict'
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost:27017/test';
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
  // console.log('[*] Database Started');
});

exports.init = function () {
	mongoose.connect(connectionString);
}