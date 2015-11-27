'use_strict'
// server.js

// Base Setup
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

// Inject Modules
var config = require('./config')(app);
var utils = require('./utils');
var port = app.get('config').appPort;
// var database = require('./database').init();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
// require('./routes/person')(app);
require('./routes/quotation')(app);
require('./routes/affiliate')(app);
require('./routes/policy')(app);
require('./routes/refund')(app);
require('./routes/remittance')(app);
require('./routes/reconcile')(app);
require('./routes/claim')(app);
// Routes

app.use('*', function(req, res, next) {
    res.status(404).json(new utils.badResponse(`Whait what? 'The url you're trying to reach doesn't exist.`));
});

// START THE SERVER
app.listen(port);
console.log(`[*] Server Running on Port: ${port}`);