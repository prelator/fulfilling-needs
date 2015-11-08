/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Request = require('../api/request/request.model');
//var Group = require('../api/group/group.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

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
      console.log('finished populating users');
    }
  );
});

Request.find({}).remove(function() {
  Request.create({
    icon: 'avatar2.jpg',
    name: 'Mary Server',
    group: 'Group Name',
    needDate: '10/22/2015',
    description: 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    area: 'lawncare',
    dateDelta: 'Yesterday',
    distanceDelta: '1.5 miles'
  }, {
    icon: 'avatar2.jpg',
    name: 'Mary Server',
    group: 'Group Name',
    needDate: '10/22/2015',
    description: 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    area: 'lawncare',
    dateDelta: 'Yesterday',
    distanceDelta: '1.5 miles'
  }, {
    icon: 'avatar2.jpg',
    name: 'Mary Server',
    group: 'Group Name',
    needDate: '10/22/2015',
    description: 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    area: 'lawncare',
    dateDelta: 'Yesterday',
    distanceDelta: '1.5 miles'
  }, function() {
      console.log('Finished populating requests');
    }
  );
});

// Group.find({}).remove(function() {
//   Group.create({
//     groupID: 1,
//     groupTypeID: 2,
//     groupTypeName: "Ministry Team",
//     campusID: 1,
//     campusName: "Main Campus",
//     creatorID: 220,
//     creatorName: "Leann Johnson",
//     name: "Test Group 01",
//     description: "This is a test group",
//     image: "https://s3.amazonaws.com/ccbchurch/10622/pics/g_51?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&Expires=1446880637&Signature=HoJpE37R%2BezgSAZG%2FuHwWogH2U0%3D",
//     areaID: 1,
//     areaName: "At Vanguard",
//     active: true
//   }, {
//     id: 2,
//     groupTypeID: 2,
//     groupTypeName: "Ministry Team",
//     campusID: 1,
//     campusName: "Main Campus",
//     creatorID: 220,
//     creatorName: "Leann Johnson",
//     name: "Test Group 01",
//     description: "This is a test group",
//     image: "https://s3.amazonaws.com/ccbchurch/10622/pics/g_51?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&Expires=1446880637&Signature=HoJpE37R%2BezgSAZG%2FuHwWogH2U0%3D",
//     areaID: 1,
//     areaName: "At Vanguard",
//     active: true
//   }, {
//     id: 3,
//     groupTypeID: 2,
//     groupTypeName: "Ministry Team",
//     campusID: 1,
//     campusName: "Main Campus",
//     creatorID: 220,
//     creatorName: "Leann Johnson",
//     name: "Test Group 01",
//     description: "This is a test group",
//     image: "https://s3.amazonaws.com/ccbchurch/10622/pics/g_51?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&Expires=1446880637&Signature=HoJpE37R%2BezgSAZG%2FuHwWogH2U0%3D",
//     areaID: 1,
//     areaName: "At Vanguard",
//     active: true
//   },  {
//     id: 4,
//     groupTypeID: 2,
//     groupTypeName: "Ministry Team",
//     campusID: 1,
//     campusName: "Main Campus",
//     creatorID: 220,
//     creatorName: "Leann Johnson",
//     name: "Test Group 01",
//     description: "This is a test group",
//     image: "https://s3.amazonaws.com/ccbchurch/10622/pics/g_51?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&Expires=1446880637&Signature=HoJpE37R%2BezgSAZG%2FuHwWogH2U0%3D",
//     areaID: 1,
//     areaName: "At Vanguard",
//     active: true
//   },  {
//     id: 5,
//     groupTypeID: 2,
//     groupTypeName: "Ministry Team",
//     campusID: 1,
//     campusName: "Main Campus",
//     creatorID: 220,
//     creatorName: "Leann Johnson",
//     name: "Test Group 01",
//     description: "This is a test group",
//     image: "https://s3.amazonaws.com/ccbchurch/10622/pics/g_51?AWSAccessKeyId=AKIAJ4CISARDRJPE4ERQ&Expires=1446880637&Signature=HoJpE37R%2BezgSAZG%2FuHwWogH2U0%3D",
//     areaID: 1,
//     areaName: "At Vanguard",
//     active: true
//   });
// });
