#!/usr/bin/env node

var request  = require('request')
  , xml2json = require('xml2json')
  , parsers  = require('./lib/parsers');

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
  request(baseURI + 'group_profiles&modified_since=2014-01-01&include_participants=false', function(err, response, xml){
    if (err || response.statusCode != 200)
      throw new Error(err)
    var data = JSON.parse(xml2json.toJson(xml))
    return parsers.parseGroupProfiles(data.ccb_api.response.groups)
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


return this.getGroupProfiles()
