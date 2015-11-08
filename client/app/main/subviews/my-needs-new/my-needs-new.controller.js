'use strict';

angular.module('fulfillingNeedsApp')
  .controller('MyNeedsNewCtrl', function ($scope, $http, $location) {

    $scope.model = {
      requestType: ''
    };

    $scope.submitRequest = function () {
      console.log("submit");
      console.log($scope.model);

      var model = {
        icon: "avatar2.jpg",
        name: "Tonya Jones",
        userID :"2",
        group: $scope.model.needGroup,
        needDate : $scope.model.date,
        description: $scope.model.description,
        area: $scope.model.requestType.label,
        dateDelta: "Today",
        distanceDelta : "1 mile"
      }
      var req = {
       method: 'POST',
       url: '/api/requests',
      //  headers: {
      //    'Content-Type': undefined
      //  },
       data: model
      }

      $http(req).then(
        function(){
         $location.path("/my-needs");
          console.log('success');
        },
        function(){
          console.log('failed');
        });

    };
  });
