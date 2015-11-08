'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Route = mongoose.model('Route', mongoose.Schema({
  name: String
, path: String
, payload: String
}));


module.exports = mongoose.model('Route', Route);
