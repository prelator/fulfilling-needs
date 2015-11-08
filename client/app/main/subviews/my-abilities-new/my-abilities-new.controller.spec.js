'use strict';

describe('Controller: MyAbilitiesNewCtrl', function () {

  // load the controller's module
  beforeEach(module('fulfillingNeedsApp'));

  var MyAbilitiesNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyAbilitiesNewCtrl = $controller('MyAbilitiesNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
