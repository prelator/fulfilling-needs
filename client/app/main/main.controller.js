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

    apiService.getRequests().then(function(response) {
      $scope.data.requests = response;
      $scope.data.groupRequests = response;
      $scope.data.userRequests = response.filter(function(item){
        return item.userID === '2';
      });
        var listGroups = {};
        for(var i=0; i < response.length; i++){
          listGroups[response[i].group] = 0;
        }
        $scope.data.groupRequestList = Object.keys(listGroups);
    }, function(error){
      console.log(error);
    });

    // apiService.getUserRequests().then(function(response) {
    //   $scope.data.userRequests = response;
    // }, function(error){
    //   console.log(error);
    // });

    // apiService.getGroupRequests(0).then(function(response) {
    //   var listGroups = {};
    //   $scope.data.groupRequests = response;
    //   for(var i=0; i < response.length; i++){
    //     listGroups[response[i].group] = 0;
    //   }
    //   $scope.data.groupRequestList = Object.keys(listGroups);
    //
    // }, function(error){
    //   console.log(error);
    // });

    // Sample API call
    apiService.getGroups().then(function (response) {

    }, function (error) {
      console.log(error);
    });

    apiService.getNeedTypes().then(function (response) {
      var typeList = [];
      for (var i = 0; i < response.length; i++) {
        typeList.push({label: response[i]});
      }
      $scope.data.needTypes = typeList;
    }, function (response) {

    });

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (toState.name === 'main') {
        $state.go('main.my-needs');
      }
      $scope.viewName = $state.current.data.title;
    });

  });
