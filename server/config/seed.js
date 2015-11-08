/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Request = require('../api/request/request.model');
var Service = require('../api/service/service.model');
var Group = require('../api/group/group.model');

// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('Finished Seeding Users');
    }
  );
});

Request.find({}).remove(function() {
  Request.create({
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'All Chruch Members Worship Team',
    'needDate': '11/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '0.5 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Berkley Small Group',
    'needDate': '11/12/2015',
    'description': 'I need help cleaning my house.',
    'area': 'house-cleaning',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Doubters Club',
    'needDate': '11/13/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '2 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'All Chruch Members Worship Team',
    'needDate': '11/18/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '2.5 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'All Chruch Members Worship Team',
    'needDate': '11/21/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '2 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'All Chruch Members Worship Team',
    'needDate': '11/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '2.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'All Chruch Members Worship Team',
    'needDate': '12/21/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '3 miles'
  }, function() {
      console.log('Finished Seeding Requests');
    }
  );
});

Service.find({}).remove(function() {
  Service.create({
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'All Chruch Members Worship Team',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'abillity': 'some abillity',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'abillity': 'some abillity',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'abillity': 'some abillity',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'abillity': 'some abillity',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'abillity': 'some abillity',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  }, function() {
      console.log('Finished Seeding Services');
    }
  );
});

Group.find({}).remove(function() {
  Group.create({
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  }, function() {
      console.log('Finished Seeding Groups');
    }
  );
});
