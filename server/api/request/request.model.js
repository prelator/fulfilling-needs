'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  icon: String,
  name: String,
  userID: String,
  group: String,
  needDate: String,
  description: String,
  area: String,
  dateDelta: String,
  distanceDelta: String,
});

module.exports = mongoose.model('Request', RequestSchema);
