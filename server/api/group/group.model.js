'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  groupID: String,
  groupTypeID: String,
  groupTypeName: String,
  campusID: String,
  campusName: String,
  creatorID: String,
  creatorName: String,
  leaderID: String,
  leaderFirstName: String,
  leaderLastName: String,
  name: String,
  description: String,
  image: String,
  areaID: String,
  areaName: String,
  active: Boolean
});


module.exports = mongoose.model('Group', GroupSchema);
