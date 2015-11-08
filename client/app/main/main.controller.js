'use strict';

angular.module('fulfillingNeedsApp')
  .controller('MainCtrl', function ($scope, $http, apiService, $state) {

    $scope.viewName = $state.current.data.title;
    $scope.data = {};

    apiService.getSummaryData().then(function(response) {
      $scope.data.summary = response;
    }, function(error){
      console.log(error);
    });

    apiService.getUserRequests().then(function(response) {
      $scope.data.userRequests = response;
    }, function(error){
      console.log(error);
    });

    apiService.getGroupRequests().then(function(response) {
      var listGroups = {};
      console.log(response);
      $scope.data.groupRequests = response;
      for(var request in response){
        console.log(request);
        listGroups[request.group] = 0;
      }
      console.log(listGroups);
      $scope.data.groupRequestList = Object.keys(listGroups);
    }, function(error){
      console.log(error);
    });

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
