'use strict';

angular.module('fulfillingNeedsApp')
  .controller('MyResponsesNewCtrl', function ($scope, $http, $location) {
    $scope.message = 'Hello';
    $scope.model = {};

    $scope.submitRequest = function () {
      console.log("submit");
      console.log($scope.model);

      var model = {
        to:"g.a.angouti@gmail.com",
        from:"Tonya Jones",
        subject:"Message from Neighborly",
        message:$scope.model.body + " fullfilneeds://"
      }

      var req = {
       method: 'POST',
       url: '/api/response/send',
      //  headers: {
      //    'Content-Type': undefined
      //  },
       data: model
      }

      $http(req).then(
        function(){

          console.log('success');
          $location.path("/my-needs");
        },
        function(){
          console.log('failed');
        });

    };
  });
