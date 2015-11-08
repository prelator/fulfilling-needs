'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-responses-new', {
        url: 'my-responses-new',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-responses-new/my-responses-new.html',
            controller: 'MyResponsesNewCtrl'
          }
        },
        data: {
          title: 'My Responses New'
        } 
      });
  });