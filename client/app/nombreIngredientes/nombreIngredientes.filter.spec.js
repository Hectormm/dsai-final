'use strict';

describe('Filter: nombreIngredientes', function () {

  // load the filter's module
  beforeEach(module('dsaiFinalApp'));

  // initialize a new instance of the filter before each test
  var nombreIngredientes;
  beforeEach(inject(function ($filter) {
    nombreIngredientes = $filter('nombreIngredientes');
  }));

  it('should return the input prefixed with "nombreIngredientes filter:"', function () {
    var text = 'angularjs';
    expect(nombreIngredientes(text)).toBe('nombreIngredientes filter: ' + text);
  });

});
