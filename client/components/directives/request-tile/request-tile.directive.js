angular.module('fulfillingNeedsApp')
.directive('requestTile', function() {
  return {
    restrict: 'AEC',
    templateUrl: 'components/directives/request-tile/request-tile.html'
  };
});
