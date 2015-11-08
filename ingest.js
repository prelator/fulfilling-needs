#!/usr/bin/env node

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var request  = require('request')
  , xml2json = require('xml2json')
  , parsers  = require('./lib/parsers')
  , mongoose = require('mongoose')
  , config   = require('./server/config/environment')
  , schemas  = require('./lib/schemas');


mongoose.connect(config.mongo.uri, config.mongo.options);

mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(-1);
	}
);


var baseURI = 'https://C4TK_Denver:3a5yP33zy@multisite.ccbchurch.com/api.php?srv='

exports.getIndividuals = function individuals(){
  request(baseURI + 'individual_fit', function(err, response, xml){
    if (err || response.statusCode != 200)
      throw new Error(err)
    var data = JSON.parse(xml2json.toJson(xml))
    return parsers.parseIndividuals(data.ccb_api.response.individuals)
  })
}

exports.getGroupProfiles = function individuals(){
  request(baseURI + 'group_profiles&modified_since=2014-01-01&include_participants=false&per_page=400', function(err, response, xml){
    if (err || response.statusCode != 200)
      throw new Error(err)
    return exports.cacheRoute({
      name: 'group_profiles'
    , path: 'group_profiles&modified_since=2014-01-01&include_participants=false&per_page=400'
    , payload: xml
    })
  })
}


exports.getGroupNeeds = function individuals(groupID){
  request(baseURI + 'group_needs&id=' + groupID, function(err, response, xml){
    if (err || response.statusCode != 200)
      throw new Error(err)
    var data = JSON.parse(xml2json.toJson(xml))
    return console.log(require('util').inspect(data, { depth: null }));
  })
}

exports.cacheRoute = function(payload){
  var _route = schemas.Route.findOne({ name: payload.name }, function (err, doc){
    if (err)
      return console.log(err)
    if (doc != null) {
      doc.payload = payload.payload
      doc.save()
      console.log('Route Upated')
    } else {
      var _route = new schemas.Route(payload);
      _route.save(function (err, _route) {
        if (err)
          return console.log(err);
        console.log('Route created')
      });
    }
  });
}

return this.getGroupProfiles()
