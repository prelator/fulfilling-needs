'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('my-needs', {
        url: '/my-needs',
        views: {
          'main': {
            templateUrl: 'app/my-needs/my-needs.html',
            controller: 'MyNeedsCtrl'
          }
        } 
      });
  });