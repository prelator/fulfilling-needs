'use strict';

angular.module('fulfillingNeedsApp')
  .service('apiService', function ($http, $q) {
    
    return {

      getGroups: function() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/groups'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            
            // Resolve the promise with the response data
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            
            // Reject the promise with the response
            deferred.reject(response);
          });

        return deferred.promise;
      }
    

    };

  });
