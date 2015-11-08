'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RequestSchema = new Schema({
  icon: String,
  name: String,
  group: String,
  needDate: String,
  description: String,
  area: String,
  dateDelta: String,
  distanceDelta: String,
});

module.exports = mongoose.model('Request', RequestSchema);

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
