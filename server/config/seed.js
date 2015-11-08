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
    name: 'Tonya Jones',
    email: 'tonyajones@gmail.com',
    password: 'password'
  }, {
    provider: 'local',
    role: 'Brian',
    name: 'Ferris',
    email: 'brianfarris@gmail.com',
    password: 'password'
  }, function() {
      console.log('Finished Seeding Users');
    }
  );
});

Request.find({}).remove(function() {
  Request.create({
    'icon': 'avatar1.jpg',
    'name': '',
    'userID': 1,
    'group': 'All Church Members',
    'needDate': '11/22/2015',
    'description': 'My wife needs a carpooler to get into town.',
    'area': 'General - Transportation',
    'dateDelta': 'This Month',
    'distanceDelta': '0.5 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': '',
    'userID': 2,
    'group': 'Worship Team',
    'needDate': '11/13/2015',
    'description': 'Could somebody from our group watch Johnny on Friday Night? We want to make it to the Star Wars premier.',
    'area': 'General - Child Care',
    'dateDelta': 'This Week',
    'distanceDelta': '1.5 miles'
  }, {
    'icon': 'avatar3.jpg',
    'name': '',
    'userID': 3,
    'group': 'Celebrate Recovery',
    'needDate': '11/22/2015',
    'description': 'My wife needs a carpooler to get into town.',
    'area': 'General - Transportation',
    'dateDelta': 'This Month',
    'distanceDelta': '0.5 miles'
  }, {
    'icon': 'avatar1.jpg',
    'name': '',
    'userID': 1,
    'group': 'Berkeley Small Group',
    'needDate': '11/07/2015',
    'description': 'A neighbor of ours recently lost his wife. Does anyone have some free time to pitch in a meal?',
    'area': 'General - Food Service',
    'dateDelta': 'Yesterday',
    'distanceDelta': '2.5 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': '',
    'userID': 2,
    'group': "Doubter's Club",
    'needDate': '11/24/2015',
    'description': "I've been looking for a job for a few months but had no bites. Could someone help me look over my resume?",
    'area': 'Pro - Career Counseling',
    'dateDelta': 'This Month',
    'distanceDelta': '2.5 miles'
  }, {
    'icon': 'avatar3.jpg',
    'name': '',
    'userID': 3,
    'group': "All Church Members",
    'needDate': '10/14/2015',
    'description': "Several months ago, I hurt my back. The pain went away, but it recently came back with a vengeance. Do any of you know a good doctor to talk to about my chronic back pain?",
    'area': 'Pro - Career Counseling',
    'dateDelta': '3 Weeks Ago',
    'distanceDelta': '1.5 miles'
  }, {
    'icon': 'avatar2.jpg',
    'name': '',
    'userID': 2,
    'group': "Worship Team",
    'needDate': '11/08/2015',
    'description': "My daughter is having a touch time in school, and I don't know how to support her. We are having a tough time connecting and I'm afraid I'm hurting her rather than helping.",
    'area': 'Pro - Counseling',
    'dateDelta': 'Today',
    'distanceDelta': '3.5 miles'
  },function() {
      console.log('Finished Seeding Requests');
    }
  );
});

Service.find({}).remove(function() {
  Service.create({
    'icon': 'avatar2.jpg',
    'name': 'Tonya Jones',
    'userID': 1,
    'group': 'All Church Members',
    'needDate': '11/08/2015',
    'description': "Sink broke, but won't be paid for three weeks. Know anyone who can help now but is flexible on payment terms?",
    'area': 'Construction - Plumbing',
    'dateDelta': 'Today',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Tonya Jones',
    'userID': 1,
    'group': 'Worship Team',
    'needDate': '11/09/2015',
    'description': "Our heater blew up! No joke! And it's almost winter. Not good. How do we get this fixed fast?",
    'area': 'Construction - Heating',
    'dateDelta': 'Tomorrow',
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
    'group': 'All Church Members',
    'needDate': '',
    'description': '',
    'area': '',
    'dateDelta': '',
    'distanceDelta': ''
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Worship Team',
    'needDate': '',
    'description': '',
    'area': '',
    'dateDelta': '',
    'distanceDelta': ''
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Celebrate Recovery',
    'needDate': '',
    'description': '',
    'area': '',
    'dateDelta': '',
    'distanceDelta': ''
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Berkeley Small Group',
    'needDate': '',
    'description': '',
    'area': '',
    'dateDelta': '',
    'distanceDelta': ''
  }, {
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': "Doubter's Club",
    'needDate': '',
    'description': '',
    'area': '',
    'dateDelta': '',
    'distanceDelta': ''
  } ,function() {
      console.log('Finished Seeding Groups');
    }
  );
});
