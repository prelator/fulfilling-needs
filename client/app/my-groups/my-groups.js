'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-groups', {
        url: 'my-groups',
        views: {
          'tabView': {
            templateUrl: 'app/my-groups/my-groups.html',
            controller: 'MyGroupsCtrl' 
          }
        }
      });
  });