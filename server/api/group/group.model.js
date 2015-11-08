'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GroupSchema = new Schema({
  groupID: String,
  groupTypeID: String,
  groupTypeName: String,
  campusID: String,
  campusName: String,
  creatorID: String,
  creatorName: String,
  leaderID: String,
  leaderFirstName: String,
  leaderLastName: String,
  name: String,
  description: String,
  image: String,
  areaID: String,
  areaName: String,
  active: Boolean
});


exports.all = function(){
  return [{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  },{
    'icon': 'avatar2.jpg',
    'name': 'Mary Server',
    'group': 'Group Name',
    'needDate': '10/22/2015',
    'description': 'I need help mowing my lawn. Need a young whipper snapper who knows how to handle weeds.',
    'area': 'lawncare',
    'dateDelta': 'Yesterday',
    'distanceDelta': '1.5 miles'
  }]
}
