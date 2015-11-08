angular.module('fulfillingNeedsApp')
  .directive('requestTile', function() {
    return {
      scope {
        request: '='
      }
      templateUrl: 'request-tile.html'
    };
  });
