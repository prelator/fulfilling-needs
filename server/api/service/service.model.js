'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  icon: String,
  name: String,
  group: String,
  needDate: String,
  description: String,
  area: String,
  abillity: String,
  dateDelta: String,
  distanceDelta: String,
});

module.exports = mongoose.model('Service', ServiceSchema);
