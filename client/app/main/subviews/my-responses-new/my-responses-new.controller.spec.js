'use strict';

describe('Controller: MyResponsesNewCtrl', function () {

  // load the controller's module
  beforeEach(module('fulfillingNeedsApp'));

  var MyResponsesNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyResponsesNewCtrl = $controller('MyResponsesNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
