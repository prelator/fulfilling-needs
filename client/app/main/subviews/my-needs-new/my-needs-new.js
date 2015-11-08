'use strict';

angular.module('fulfillingNeedsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.my-needs-new', {
        url: 'my-needs-new',
        views: {
          'tabView': {
            templateUrl: 'app/main/subviews/my-needs-new/my-needs-new.html',
            controller: 'MyNeedsNewCtrl'
          }
        },
        data: {
          title: 'My Needs New'
        } 
      });
  });