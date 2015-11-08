'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-abilities-new', {
        url: 'my-abilities-new',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-abilities-new/my-abilities-new.html',
            controller: 'MyAbilitiesNewCtrl'
          }
        },
        data: {
          title: 'New Service Area'
        } 
      });
  });