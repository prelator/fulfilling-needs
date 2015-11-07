'use strict';

describe('Controller: MyCommunityCtrl', function () {

  // load the controller's module
  beforeEach(module('fulfillingNeedsApp'));

  var MyCommunityCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyCommunityCtrl = $controller('MyCommunityCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
