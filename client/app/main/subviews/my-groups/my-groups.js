'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-groups', {
        url: 'my-groups',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-groups/my-groups.html',
            controller: 'MyGroupsCtrl' 
          }
        },
        data: {
          title: 'My Groups'
        },
        authenticate: true
      });
  });