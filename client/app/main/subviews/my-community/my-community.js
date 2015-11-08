'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-community', {
        url: 'my-community',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-community/my-community.html',
            controller: 'MyCommunityCtrl'
          }
        },
        data: {
          title: 'My Community'
        },
        authenticate: true
      });
  });