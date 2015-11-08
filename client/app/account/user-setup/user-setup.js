'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.user-setup', {
        url: 'user-setup',
        views: {
          'tabView': {
            templateUrl: 'app/account/user-setup/user-setup.html',
            controller: 'UserSetupCtrl'
          }
        },
        data: {
          title: 'User Setup'
        } 
      });
  });