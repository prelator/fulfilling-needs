'use strict';

angular.module('fulfillingNeedsApp')
  .controller('MainCtrl', function ($scope, $http, apiService) {
    
    apiService.getGroups().then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });

  });
