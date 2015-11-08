/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */


var _ = require('lodash');

var xml2js = require('xml2js');
var parser = new xml2js.Parser();

var Route = require('../route/route.model');

var Entities = require('html-entities').AllHtmlEntities;

entities = new Entities();


// Get list of things
exports.index = function(req, res) {
  Route.findOne({ 'name': 'group_profiles' }, function (err, route) {
    if(err) { return handleError(res, err); }
    parser.parseString(route, function (err, result) {
      return res.status(200).send(result)
    });
    // route.payload = route.payload.replace(/({)([a-zA-Z0-9]+)(:)/,'$1"$2"$3')
    // var payload = JSON.parse(route.payload)
    // var groups = payload.ccb_api.response.groups.group;
    //
    // _groups = []
    // for (var x in groups) {
    //   var current = groups[x]
    //   _groups.push({
    //     "id": current.id
    //   , "name": entities.encode(current.name)
    //   , "description": current.description
    //   // , "main_leader": current.main_leader
    //   })
    // }

  });
};

// Get a single thing
exports.show = function(req, res) {
  Group.findById(req.params.id, function (err, group) {
    if(err) { return handleError(res, err); }
    if(!group) { return res.status(404).send('Not Found'); }
    return res.json(group);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  Group.create(req.body, function(err, group) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(group);
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Group.findById(req.params.id, function (err, group) {
    if (err) { return handleError(res, err); }
    if(!group) { return res.status(404).send('Not Found'); }
    var updated = _.merge(group, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(group);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Group.findById(req.params.id, function (err, group) {
    if(err) { return handleError(res, err); }
    if(!group) { return res.status(404).send('Not Found'); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
