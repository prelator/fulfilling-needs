'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-abilities', {
        url: 'my-abilities',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-abilities/my-abilities.html',
            controller: 'MyAbilitiesCtrl'
          }
        },
        data: {
          title: 'My Service Areas'
        }
      });
  });