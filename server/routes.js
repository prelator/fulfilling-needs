/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // API Enumeration Routes
  app.use('/api/groups', require('./api/group'));
  app.use('/api/requests', require('./api/request'));
  app.use('/api/churches', require('./api/church'));
  app.use('/api/communites', require('./api/community'));
  app.use('/api/services', require('./api/service'));

  app.use('/api/needTypes', require('./api/needTypes'));


  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};