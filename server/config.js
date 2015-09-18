'use strict'
// Gets your current enviroment [development|production]
var enviroment = '';

var config = {
  development: {
    publicPath: 'your/path/to/public',
    dbUrl: 'localhost:27017/test',
    APP_PORT: process.env.PORT || 8080
  },
  production: {
    publicPath: 'your/path/to/public',
    dbUrl: 'localhost:27017/test',
    APP_PORT: process.env.PORT || 8080
  }
}

function setEnviroment(app) {
  enviroment = app.get('enviroment');
  console.log( `[*] Enviroment: ${enviroment}`);
  return config[enviroment];
}

function getEnviroment() {
  return config[enviroment];
}

exports.getEnviroment = getEnviroment;

exports.setEnviroment = setEnviroment;