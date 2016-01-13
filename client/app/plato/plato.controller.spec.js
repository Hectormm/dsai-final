'use strict';

describe('Controller: PlatoCtrl', function () {

  // load the controller's module
  beforeEach(module('dsaiFinalApp'));

  var PlatoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlatoCtrl = $controller('PlatoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
