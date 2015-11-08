'use strict';

describe('Controller: MyNeedsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('fulfillingNeedsApp'));

  var MyNeedsNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyNeedsNewCtrl = $controller('MyNeedsNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
