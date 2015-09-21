'use strict'
// Set your current enviroment [development|production]
var enviroment = 'development';

module.exports = function (app) {
  app.set('config', config[enviroment]);
}

var config = {
  development: {
    publicPath: 'your/path/to/public',
    dbUrl: 'localhost:27017/test',
    appPort: process.env.PORT || 8080,
    jwtSecret: 'your-password'
  },
  production: {
    publicPath: 'your/path/to/public',
    dbUrl: 'localhost:27017/test',
    appPort: process.env.PORT || 8080,
    jwtSecret: 'your-password'
  }
}