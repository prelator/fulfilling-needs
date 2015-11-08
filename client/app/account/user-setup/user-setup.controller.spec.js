'use strict';

describe('Controller: UserSetupCtrl', function () {

  // load the controller's module
  beforeEach(module('fulfillingNeedsApp'));

  var UserSetupCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserSetupCtrl = $controller('UserSetupCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
