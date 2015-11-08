/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

var sendgrid = require("sendgrid")('sean_giant', 'digital12');

// Sends a Response to the User
exports.create = function(req, res) {

  console.log(require('util').inspect({
    message: "Sending new response",
    payload: req.body,
    to: req.body.to
  }, { depth: null }));
  var email = new sendgrid.Email();

  email.addTo(req.body.to);
  email.setFrom(req.body.from);
  email.setSubject(req.body.subject);
  email.setHtml(req.body.message);

  sendgrid.send(email);

  res.status(200).send({
    message: "Email sent!"
  })
};

function handleError(res, err) {
  return res.status(500).send(err);
}
