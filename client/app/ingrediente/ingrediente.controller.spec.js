'use strict';

describe('Controller: IngredienteCtrl', function () {

  // load the controller's module
  beforeEach(module('dsaiFinalApp'));

  var IngredienteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngredienteCtrl = $controller('IngredienteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
