/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */


var _ = require('lodash');


var Route = require('../route/route.model');


// Get list of things
exports.index = function(req, res) {
  Route.findOne({ 'name': 'group_profiles' }, function (err, route) {
    if(err) { return handleError(res, err); }
    var payload = JSON.parse(route.payload)
    return res.status(200).send(payload)
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


// Get a single thing
exports.needs = function(req, res) {
  var routeName = 'group_needs&id=' + req.params.id
  Route.findOne({ 'name': routeName }, function (err, route) {
    if(err) { return handleError(res, err); }
    var payload = JSON.parse(route.payload)
    return res.status(200).send(payload)
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
