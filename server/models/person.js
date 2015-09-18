var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schemaName = 'person';

var schemaBody = new Schema({
  name:  {type: String, required: true},
  age: Number,
  date: { type: Date, default: Date.now }
});

schemaBody.set('collection', schemaName);

module.exports = mongoose.model(schemaName, schemaBody);