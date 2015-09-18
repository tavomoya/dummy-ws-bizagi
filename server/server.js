'use_strict'
// server.js

// Base Setup
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var port    = process.env.PORT || 8080;

// Inject Modules
var config = require('./config');
var database = require('./database').init();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
require('./routes/person')(app);
// Routes

// START THE SERVER
app.listen(port);
console.log(`[*] Server Running on Port: ${port}`);