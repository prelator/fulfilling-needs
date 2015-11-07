'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-needs', {
        url: 'my-needs',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-needs/my-needs.html',
            controller: 'MyNeedsCtrl'
          }
        } 
      });
  });