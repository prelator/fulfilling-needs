'use strict';

angular.module('fulfillingNeedsApp')
  .service('apiService', function ($http, $q) {

    var mockObject = {
      'summary': {'counts':{'user':1, 'group':3, 'church':40, 'community':1000, 'abilities':5}},
      'requests': {
        'users': [{}],
        'group': [{}],
        'church': [{}],
        'community': [{}]
      }
    }

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
      },

      //api/requests
      getGroup: function(group_id) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/groups/' + group_id
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/requests
      getRequests: function() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/requests'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/groups/:group_id/requests
      getGroupRequests: function(group_id) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/groups/' + group_id + '/requests'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/requests/:req_id
      getRequest: function(req_id) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/requests/' + req_id
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/church/requests
      getChurchRequests: function() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/church/requests'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/community/requests/:postalcode/:milerange
      getCommunityRequests: function(postalcode, range /* optional */) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/community/requests/' + postalcode + (range ? '/' + range : '')
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/users/:user_id/requests
      getUserRequests: function(user_id) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/users/' + user_id + '/requests'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/users/:user_id/abilities
      getUserAbilities: function(user_id) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/users/' + user_id + '/abilities'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/master/abilities
      getUserAbilities: function() {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/master/abilities'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/master/abilities/:ability_id
      getUserAbilities: function(ability_id) {
        var deferred = $q.defer();

        $http({
          method: 'GET',
          url: '/api/master/abilities/' + ability_id
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      },

      //api/requests/totals
      getSummaryData: function() {

        var deferred = $q.defer();

        //faking a return
        deferred.resolve(mockObject.summary);

        $http({
          method: 'GET',
          url: '/api/requests/totals'
        }).then(function successCallback(response) {
            deferred.resolve(response.data);
          }, function errorCallback(response) {
            deferred.reject(response);
          });

        return deferred.promise;
      }

    };

  });
