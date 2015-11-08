var mongoose = require('mongoose');

exports.Route = mongoose.model('Route', mongoose.Schema({
  name: String
, path: String
, payload: String
}));
