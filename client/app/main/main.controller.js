'use strict';

angular.module('fulfillingNeedsApp')
  .controller('MainCtrl', function ($scope, $http, apiService, $state) {
    
    $scope.viewName = $state.current.data.title;

    // Sample API call
    apiService.getGroups().then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (toState.name === 'main') {
        $state.go('main.my-needs');
      }
      $scope.viewName = $state.current.data.title;
    });

  });
