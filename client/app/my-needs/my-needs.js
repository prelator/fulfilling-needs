'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-needs', {
        url: 'my-needs',
        views: {
          'tabView': {
            templateUrl: 'app/my-needs/my-needs.html',
            controller: 'MyNeedsCtrl'
          }
        } 
      });
  });