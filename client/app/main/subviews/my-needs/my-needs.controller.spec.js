'use strict';

describe('Controller: MyNeedsCtrl', function () {

  // load the controller's module
  beforeEach(module('fulfillingNeedsApp'));

  var MyNeedsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyNeedsCtrl = $controller('MyNeedsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
