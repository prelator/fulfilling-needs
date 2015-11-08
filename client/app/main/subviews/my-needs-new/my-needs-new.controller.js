'use strict';

angular.module('fulfillingNeedsApp')
  .controller('MyNeedsNewCtrl', function ($scope) {

    $scope.model = {
      requestType: ''
    };

    $scope.submitRequest = function () {
      console.log("submit");
      console.log($scope.model);
    };
  });
