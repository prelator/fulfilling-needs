'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
          'main': {
            templateUrl: 'app/account/login/login.html',
            controller: 'LoginCtrl'
          }
        }
      })
      .state('signup', {
        url: '/signup',
        views: {
          'main': {
            templateUrl: 'app/account/signup/signup.html',
            controller: 'SignupCtrl'
          }
        }    
      })
      .state('settings', {
        url: '/settings',
        views: {
          'main': {
            templateUrl: 'app/account/settings/settings.html',
            controller: 'SettingsCtrl',
          }
        },
        authenticate: true
      });
  });