#!/usr/bin/env node

var request = require('request')
var parser = require('xml2json');

request('https://C4TK_Denver:3a5yP33zy@multisite.ccbchurch.com/api.php?srv=individual_fit', response)

function response(err, response, xml) {
  if (err || response.statusCode != 200)
    throw new Error(err)
  var results = JSON.parse(parser.toJson(xml))
  return console.log(require('util').inspect(results, { depth: null }));
}
