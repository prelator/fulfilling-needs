'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  icon: String,
  name: String,
  group: String,
  needDate: String,
  description: String,
  area: String,
  dateDelta: String,
  distanceDelta: String
});

module.exports = mongoose.model('Group', GroupSchema);
