'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-church', {
        url: 'my-church',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-church/my-church.html',
            controller: 'MyChurchCtrl'
          }
        }  
      });
  });